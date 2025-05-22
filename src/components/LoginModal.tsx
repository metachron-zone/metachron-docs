import React, { useState } from 'react';
import { X, Mail, Github } from 'lucide-react';
interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function LoginModal({
  isOpen,
  onClose
}: LoginModalProps) {
  const [activeTab, setActiveTab] = useState<'wechat' | 'email'>('wechat');
  if (!isOpen) return null;
  return <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-[#151A2D]/95 rounded-2xl p-8 border border-gray-800">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-white">
          <X size={20} />
        </button>
        <div className="flex mb-8">
          <button className={`flex-1 py-2 text-center ${activeTab === 'wechat' ? 'text-[#00B5AD] border-b-2 border-[#00B5AD]' : 'text-gray-400 border-b border-gray-800'}`} onClick={() => setActiveTab('wechat')}>
            微信登录
          </button>
          <button className={`flex-1 py-2 text-center ${activeTab === 'email' ? 'text-[#00B5AD] border-b-2 border-[#00B5AD]' : 'text-gray-400 border-b border-gray-800'}`} onClick={() => setActiveTab('email')}>
            邮箱登录
          </button>
        </div>
        {activeTab === 'wechat' ? <div className="text-center">
            <div className="bg-white p-4 rounded-lg w-48 h-48 mx-auto mb-4">
              <img src="/image.png" alt="WeChat QR Code" className="w-full h-full" />
            </div>
            <p className="text-gray-400 text-sm">请使用微信扫码登录</p>
          </div> : <form className="space-y-4">
            <div>
              <input type="email" placeholder="请输入邮箱" className="w-full bg-[#0B0F19] border border-gray-800 rounded-lg px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00B5AD]" />
            </div>
            <div>
              <div className="flex gap-2">
                <input type="text" placeholder="验证码" className="flex-1 bg-[#0B0F19] border border-gray-800 rounded-lg px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00B5AD]" />
                <button className="px-4 py-2 bg-[#2E4BAE] text-white rounded-lg hover:bg-[#2641A9] transition-colors">
                  发送验证码
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="agreement" className="rounded border-gray-600" />
              <label htmlFor="agreement" className="text-sm text-gray-400">
                我已阅读并同意{' '}
                <a href="#" className="text-[#00B5AD]">
                  《版权声明》
                </a>{' '}
                和{' '}
                <a href="#" className="text-[#00B5AD]">
                  《用户协议》
                </a>
              </label>
            </div>
            <button className="w-full bg-[#00B5AD] text-white rounded-lg py-2 hover:bg-[#009992] transition-colors">
              登录
            </button>
          </form>}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm mb-4">第三方登录</p>
          <div className="flex justify-center space-x-6">
            <button className="p-2 rounded-full bg-[#0B0F19] hover:bg-gray-800 transition-colors">
              <Github className="w-6 h-6 text-gray-400" />
            </button>
            <button className="p-2 rounded-full bg-[#0B0F19] hover:bg-gray-800 transition-colors">
              <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </button>
            <button className="p-2 rounded-full bg-[#0B0F19] hover:bg-gray-800 transition-colors">
              <div className="w-6 h-6 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>;
}