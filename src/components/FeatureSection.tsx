import React from 'react';
import { FeatureCard } from './FeatureCard';
import { Bot, LineChart, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
export function FeatureSection() {
  const [featuresRef, isFeaturesVisible] = useScrollAnimation();
  const [visualRef, isVisualVisible] = useScrollAnimation();
  return <section className="py-20 bg-[#0A0E17]" id="features">
      <div className="container mx-auto px-4">
        <div ref={featuresRef} className={`transition-all duration-1000 ease-out ${isFeaturesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              核心功能模块
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              METACHRON 提供生成式智能体开发与管理解决方案，从创建到优化，再到生态协作
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <FeatureCard icon={<Bot className="w-10 h-10 text-[#00B5AD]" />} title="智能云IDE" description="氛围编码和智能体工坊，支持多语言、多框架、实时团队协作编辑" image="/agentIDE.png" />
            <FeatureCard icon={<LineChart className="w-10 h-10 text-[#00B5AD]" />} title="自适应优化引擎" description="动态性能调优器监控 Agent 运行时资源消耗，推荐优化策略，通过用户反馈数据自动生成强化学习奖励函数" image="/optimization_demo.png" />
            <FeatureCard icon={<Users className="w-10 h-10 text-[#00B5AD]" />} title="生态协作体系" description="MCP组件市场建立标准化工具组件交易平台，Agent共享社区提供模板的版本管理、分叉协作功能" image="/ecosystem_hub_demo.png" />
          </div>
        </div>
        <div ref={visualRef} className={`transition-all duration-1000 ease-out delay-200 ${isVisualVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-[#151A2D] border border-gray-800 rounded-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  可视化编排界面
                </h3>
                <p className="text-gray-400 mb-6">
                  拖拽式工作流编辑器允许非技术用户通过节点连接方式构建 Agent
                  逻辑，自动生成底层代码。实时架构图谱动态展示 Agent
                  的组件依赖关系和数据流拓扑结构。
                </p>
                <ul className="space-y-3">
                  {['上下文感知帮助系统', '风险预警机制', '多角色权限管理', '版本控制系统'].map((item, index) => <li key={index} className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00B5AD] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>)}
                </ul>
              </div>
              <div>
                <div className="bg-[#0B0F19] border border-gray-800 rounded-lg overflow-hidden shadow-lg">
                  <img src="/agent_dashboard_demo.png" alt="METACHRON Dashboard" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}