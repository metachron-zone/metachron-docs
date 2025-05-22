import React from 'react';
import { Button } from './Button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
export function CTASection() {
  const [ctaRef, isCtaVisible] = useScrollAnimation();
  return <section className="py-20">
      <div className="container mx-auto px-4">
        <div ref={ctaRef} className={`transition-all duration-1000 ease-out ${isCtaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-[#151A2D] to-[#1A2036] rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00B5AD]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00B5AD]/5 rounded-full blur-3xl" />
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                开始构建您的智能 Agent 生态系统
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                加入 METACHRON 平台，释放 AI
                的无限潜能，轻松创建、优化和管理智能 Agent
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg">免费注册</Button>
                <Button variant="outline" size="lg">
                  联系销售团队
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#00B5AD] mb-2">
                1000+
              </div>
              <p className="text-gray-400">活跃组件</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#00B5AD] mb-2">
                15,000+
              </div>
              <p className="text-gray-400">已部署 Agent</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#00B5AD] mb-2">98%</div>
              <p className="text-gray-400">客户满意度</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}