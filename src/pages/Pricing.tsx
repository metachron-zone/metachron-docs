import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Check } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { plans, functionalTable, keyMap } from '../constants/pricing';
import { OrderModal } from '../components/OrderModal';

export function Pricing() {
  const [orderOpen, setOrderOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: number | string } | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  // 获取某个plan的功能列表
  function getPlanFeatures(planName: string): string[] {
    const col = keyMap[planName] || 'free';
    return functionalTable.filter((row: { name: string; free: string; basic: string; professional: string; enterprise: string }) => row[col] && row[col] !== '—').map((row: { name: string; free: string; basic: string; professional: string; enterprise: string }) => row.name + (row[col] === '✔️' ? '' : `：${row[col]}`));
  }

  return <div className="min-h-screen bg-[#0B0F19] text-gray-100">
    <Helmet>
      <title>价格方案 - METACHRON</title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Helmet>
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">价格方案</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          选择最适合您需求的方案，开启智能体之旅
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-20">
        {plans.map((plan, index) => {
          const col1 = plan.features.slice(0, 6);
          const col2 = plan.features.slice(6);
          return (
            <div key={index} className={`bg-[#151A2D] border ${plan.featured ? 'border-[#00B5AD]' : 'border-gray-800'} rounded-lg p-8 relative ${plan.featured ? 'shadow-lg shadow-[#00B5AD]/20' : ''} flex flex-col h-full`}>
              {plan.featured && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#00B5AD] text-white px-4 py-1 rounded-full text-sm">
                    最受欢迎
                  </span>
                </div>}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="text-3xl font-bold mb-4">{typeof plan.price === 'number' ? `￥${plan.price}/月` : plan.price}</div>
              </div>
              <div className="flex gap-6 mb-8 flex-1">
                <ul className="space-y-4 flex-1">
                  {col1.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-[#00B5AD] mr-2" />
                    <span>{feature}</span>
                  </li>)}
              </ul>
                {col2.length > 0 && <ul className="space-y-4 flex-1">
                  {col2.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-[#00B5AD] mr-2" />
                    <span>{feature}</span>
                  </li>)}
                </ul>}
              </div>
              <div className="mt-auto">
              <Button
                variant={plan.featured ? 'default' : 'outline'}
                className="w-full"
                onClick={() => {
                  if (typeof plan.price == 'string') {
                    if (plan.price !== '联系销售') {
                      setSelectedPlan(plan);
                      setSelectedFeatures(getPlanFeatures(plan.name));
                      setOrderOpen(true);
                    } else {
                      window.open('https://metachron.zone/contact', '_blank');
                    }
                  }
                }}
              >
                {plan.price === '联系销售' ? '联系我们' : '立即开始'}
              </Button>
              </div>
            </div>
          );
        })}
        </div>
        <div className="overflow-x-auto mb-12">
          <table className="min-w-full border border-gray-800 rounded-lg bg-[#151A2D] text-center">
            <thead>
              <tr>
                <th className="px-4 py-3 border-b border-gray-700 text-lg font-bold text-white bg-[#181F2D]">功能</th>
                <th className="px-4 py-3 border-b border-gray-700 text-lg font-bold text-[#00B5AD] bg-[#181F2D]">7天试用版</th>
                <th className="px-4 py-3 border-b border-gray-700 text-lg font-bold text-[#00B5AD] bg-[#181F2D]">基础版</th>
                <th className="px-4 py-3 border-b border-gray-700 text-lg font-bold text-[#00B5AD] bg-[#181F2D]">专业版</th>
                <th className="px-4 py-3 border-b border-gray-700 text-lg font-bold text-[#00B5AD] bg-[#181F2D]">企业版</th>
              </tr>
            </thead>
            <tbody className="text-gray-200">
              {functionalTable.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-3 border-b border-gray-800">{item.name}</td>
                  <td className="px-4 py-3 border-b border-gray-800">{item.free}</td>
                  <td className="px-4 py-3 border-b border-gray-800">{item.basic}</td>
                  <td className="px-4 py-3 border-b border-gray-800">{item.professional}</td>
                  <td className="px-4 py-3 border-b border-gray-800">{item.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
      <OrderModal open={orderOpen} onClose={() => setOrderOpen(false)} plan={selectedPlan} features={selectedFeatures} />
    </div>;
}