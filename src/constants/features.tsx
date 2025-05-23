import { BrainCircuit, Bot, Cpu, Network } from "lucide-react";

export const features = [{
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