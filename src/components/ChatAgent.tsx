import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '../lib/supabase';
import { MessageSquare, X, ChevronDown, ChevronUp } from 'lucide-react';
import { OpenAI } from 'openai';
import ReactMarkdown from 'react-markdown';
import '../assets/css/ChatAgent.css';

interface Message {
  role: 'user' | 'agent';
  content: string;
}

export function ChatAgent() {
  const [collapsed, setCollapsed] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'agent', content: '您好，我是METACHRON智能客服，有什么可以帮您？' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [baseUrl, setBaseUrl] = useState('');
  const [llmModel, setLlmModel] = useState('');
  const [partialReply, setPartialReply] = useState('');
  const chatRef = useRef<HTMLDivElement>(null);

  // 获取deepseek-chat模型的api_key
  useEffect(() => {
    async function fetchApiKey() {
      const { data } = await supabase
        .from('api_keys')
        .select('llm_model, api_key, base_url')
        .ilike('llm_model', '%deepseek%')
        .single();
      if (!data) {
        console.warn('No data found for llm_model = "deepseek"');
        return;
      }
      if (data?.llm_model) setLlmModel(data.llm_model);
      if (data?.api_key) setApiKey(data.api_key);
      if (data?.base_url) setBaseUrl(data.base_url);
    }
    fetchApiKey();
  }, []);

  // 保持聊天内容滚动到底部
  useEffect(() => {
    if (!collapsed && chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, collapsed, partialReply]);

  // 发送消息
  async function sendMessage() {
    if (!input.trim()) return;
    const userMsg: Message = { role: 'user', content: input };
    setMessages(msgs => [...msgs, userMsg]);
    setInput('');
    setLoading(true);
    setPartialReply('');
    try {
      // 构造OpenAI实例，支持自定义baseURL和apiKey
      const openai = new OpenAI({
        apiKey,
        baseURL: baseUrl,
        dangerouslyAllowBrowser: true,
      });
      // 构造历史消息，role需为'user'|'assistant'|'system'
      const chatHistory = [
        ...messages.map(m => ({ role: m.role === 'user' ? 'user' : 'assistant', content: m.content })),
        { role: 'user', content: input }
      ] as any[];
      const completion = await openai.chat.completions.create({
        model: llmModel,
        messages: chatHistory,
        stream: false,
      });
      const reply = completion.choices?.[0]?.message?.content || '很抱歉，暂时无法获取回复。';
      // 动态逐字输出
      let i = 0;
      function typeWriter() {
        setPartialReply(reply.slice(0, i));
        if (i <= reply.length) {
          i++;
          setTimeout(typeWriter, 18);
        } else {
          setMessages(msgs => [...msgs, { role: 'agent', content: reply }]);
          setPartialReply('');
          setLoading(false);
        }
      }
      typeWriter();
    } catch (err) {
      setMessages(msgs => [...msgs, { role: 'agent', content: '抱歉，客服智能体暂时无法回复，请稍后再试。' }]);
      setPartialReply('');
      setLoading(false);
    }
  }

  return (
    <div className="fixed z-50 right-6 bottom-6 w-80 max-w-full">
      <div className={`bg-[#151A2D] border border-gray-800 rounded-t-lg rounded-b-lg shadow-2xl flex flex-col transition-all duration-300 ${collapsed ? 'h-14' : 'h-[500px]'}`}
        style={{ minHeight: collapsed ? 56 : 400 }}>
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800 rounded-t-lg bg-[#151A2D]">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#00B5AD]" />
            <span className="font-bold">智能客服</span>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setCollapsed(c => !c)} className="text-gray-400 hover:text-white">
              {collapsed ? <ChevronUp /> : <ChevronDown />}
            </button>
            <button onClick={() => setCollapsed(true)} className="text-gray-400 hover:text-white">
              <X />
            </button>
          </div>
        </div>
        {!collapsed && (
          <>
            <div ref={chatRef} className="flex-1 overflow-y-auto px-4 py-2 space-y-2 bg-[#151A2D] custom-scrollbar">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`px-3 py-2 rounded-lg text-sm max-w-[80%] ${msg.role === 'user' ? 'bg-[#00B5AD] text-white' : 'bg-gray-800 text-gray-100'}`}>
                    {msg.role === 'agent' ? <ReactMarkdown>{msg.content}</ReactMarkdown> : msg.content}
                  </div>
                </div>
              ))}
              {loading && partialReply && (
                <div className="flex justify-start">
                  <div className="px-3 py-2 rounded-lg text-sm max-w-[80%] bg-gray-800 text-gray-100 animate-pulse">
                    <ReactMarkdown>{partialReply}</ReactMarkdown>
                  </div>
                </div>
              )}
              {loading && !partialReply && <div className="text-xs text-gray-400">智能体正在输入...</div>}
            </div>
            <div className="p-3 border-t border-gray-800 bg-[#151A2D]">
              <form onSubmit={e => { e.preventDefault(); sendMessage(); }} className="flex gap-2">
                <input
                  className="flex-1 bg-[#0B0F19] border border-gray-800 rounded-lg px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00B5AD]"
                  placeholder="请输入您的问题..."
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  disabled={loading}
                />
                <button type="submit" className="bg-[#00B5AD] text-white px-4 py-2 rounded-lg font-bold disabled:opacity-50" disabled={loading || !input.trim()}>
                  发送
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
} 