import React from 'react';
import { Button } from '../components/Button';
import { Check } from 'lucide-react';
export function Pricing() {
  const plans = [{
    name: '基础版',
    price: '免费',
    features: ['3个Agent额度', '基础组件库访问', '社区支持', '基础监控功能']
  }, {
    name: '专业版',
    price: '￥999/月',
    featured: true,
    features: ['无限Agent额度', '完整组件库访问', '优先技术支持', '高级监控和优化', '团队协作功能', '自定义集成接口']
  }, {
    name: '企业版',
    price: '联系销售',
    features: ['定制化部署方案', '专属技术支持', 'SLA保障', '企业级安全特性', '专属训练资源', '定制化功能开发']
  }];
  return <div className="min-h-screen bg-[#0B0F19] text-gray-100">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">价格方案</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            选择最适合您需求的方案，开启智能Agent之旅
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => <div key={index} className={`bg-[#151A2D] border ${plan.featured ? 'border-[#00B5AD]' : 'border-gray-800'} rounded-lg p-8 relative ${plan.featured ? 'shadow-lg shadow-[#00B5AD]/20' : ''}`}>
              {plan.featured && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#00B5AD] text-white px-4 py-1 rounded-full text-sm">
                    最受欢迎
                  </span>
                </div>}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="text-3xl font-bold mb-4">{plan.price}</div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-[#00B5AD] mr-2" />
                    <span>{feature}</span>
                  </li>)}
              </ul>
              <Button variant={plan.featured ? 'default' : 'outline'} className="w-full">
                {plan.price === '联系销售' ? '联系我们' : '立即开始'}
              </Button>
            </div>)}
        </div>
        <div className="bg-[#151A2D] border border-gray-800 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            需要定制化方案？
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            我们提供灵活的定制化方案，满足您的特定需求。联系我们的销售团队，获取专属方案
          </p>
          <Button size="lg">预约咨询</Button>
        </div>
      </div>
    </div>;
}