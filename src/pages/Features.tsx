import React from 'react';
import { BrainCircuit, Bot, Cpu, Network } from 'lucide-react';
export function Features() {
  const features = [{
    icon: <BrainCircuit className="w-6 h-6 text-[#00B5AD]" />,
    title: '智能Agent生成工坊',
    description: '通过自然语言描述需求，自动生成Agent技术规格和代码框架'
  }, {
    icon: <Bot className="w-6 h-6 text-[#00B5AD]" />,
    title: '多模态调试沙盒',
    description: '提供虚拟执行环境，支持实时测试和可视化数据流转路径'
  }, {
    icon: <Cpu className="w-6 h-6 text-[#00B5AD]" />,
    title: '自适应优化引擎',
    description: '智能监控性能指标，自动推荐优化策略并持续改进'
  }, {
    icon: <Network className="w-6 h-6 text-[#00B5AD]" />,
    title: '生态协作体系',
    description: '标准化组件市场和Agent模板社区，促进开发者生态建设'
  }];
  return <div className="min-h-screen bg-[#0B0F19] text-gray-100">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">产品功能</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            METACHRON 提供全方位的智能 Agent 开发与管理解决方案
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => <div key={index} className="bg-[#151A2D] border border-gray-800 rounded-lg p-6">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>)}
        </div>
        <div className="bg-[#151A2D] border border-gray-800 rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                企业级功能
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">团队协作套件</h3>
                  <p className="text-gray-400">
                    多角色权限管理和版本控制系统，确保团队高效协作
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">运维监控中心</h3>
                  <p className="text-gray-400">
                    实时监控Agent集群性能，支持自动化扩缩容
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI辅助调试</h3>
                  <p className="text-gray-400">
                    智能诊断运行异常，自动生成修复建议
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img src="/agent_dashboard_demo.png" alt="Enterprise Features" className="rounded-lg shadow-xl border border-gray-800" />
            </div>
          </div>
        </div>
      </div>
    </div>;
}