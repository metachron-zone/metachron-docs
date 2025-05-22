import React from 'react';
import { Button } from './Button';
export function HeroSection() {
  return <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0B0F19] z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00B5AD]/10 via-transparent to-transparent" />
        <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-[#00B5AD]/10 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            智能 Agent 创建与管理平台
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            METACHRON 让您轻松构建、优化和部署智能 Agent，释放 AI 的无限可能
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg">免费开始使用</Button>
            <Button variant="outline" size="lg">
              查看演示
            </Button>
          </div>
        </div>
        <div className="relative mx-auto max-w-5xl">
          <div className="bg-[#151A2D] border border-gray-800 rounded-lg shadow-2xl overflow-hidden">
            <img src="/ecosystem_hub_demo.png" alt="METACHRON Dashboard" className="w-full h-auto" />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#00B5AD]/20 rounded-full blur-xl" />
        </div>
      </div>
    </section>;
}