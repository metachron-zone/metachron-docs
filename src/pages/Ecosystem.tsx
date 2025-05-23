import React from 'react';
import { Button } from '../components/Button';
import { Helmet } from 'react-helmet-async';
export function Ecosystem() {
  const components = [{
    name: 'Stripe Payment Processor',
    category: 'Payment',
    downloads: '12,450',
    rating: '4.9'
  }, {
    name: 'Google Sheets Connector',
    category: 'Integration',
    downloads: '8,320',
    rating: '4.7'
  }, {
    name: 'Twitter Sentiment Analyzer',
    category: 'Analysis',
    downloads: '6,540',
    rating: '4.5'
  }];
  return <div className="min-h-screen bg-[#0B0F19] text-gray-100">
    <Helmet>
      <title>生态系统 - METACHRON</title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Helmet>
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">生态系统</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          探索丰富的组件市场和Agent模板库，加速您的开发进程
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="bg-[#151A2D] border border-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">MCP 组件市场</h2>
          <div className="space-y-4">
            {components.map((component, index) => <div key={index} className="flex items-center justify-between p-4 border border-gray-800 rounded-lg">
                <div>
                  <h3 className="font-medium mb-1">{component.name}</h3>
                  <span className="text-sm text-gray-400">
                    {component.category}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-[#00B5AD] mb-1">
                    ★ {component.rating}
                  </div>
                  <span className="text-sm text-gray-400">
                    {component.downloads} 下载
                  </span>
                </div>
              </div>)}
          </div>
          <div className="mt-6">
            <Button>浏览组件市场</Button>
          </div>
        </div>
        <div className="bg-[#151A2D] border border-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Agent 共享社区</h2>
          <img src="/ecosystem_hub_demo.png" alt="Agent Community" className="rounded-lg mb-6" />
          <p className="text-gray-400 mb-6">
            加入充满活力的开发者社区，分享和获取优质Agent模板，共同推动AI生态发展
          </p>
          <Button variant="outline">加入社区</Button>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">生态系统数据</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#151A2D] border border-gray-800 rounded-lg p-6">
            <div className="text-4xl font-bold text-[#00B5AD] mb-2">
              1000+
            </div>
            <p className="text-gray-400">活跃组件</p>
          </div>
          <div className="bg-[#151A2D] border border-gray-800 rounded-lg p-6">
            <div className="text-4xl font-bold text-[#00B5AD] mb-2">
              15,000+
            </div>
            <p className="text-gray-400">已部署 Agent</p>
          </div>
          <div className="bg-[#151A2D] border border-gray-800 rounded-lg p-6">
            <div className="text-4xl font-bold text-[#00B5AD] mb-2">
              5,000+
            </div>
            <p className="text-gray-400">社区开发者</p>
          </div>
        </div>
      </div>
    </div>
  </div>;
}