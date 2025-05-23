import React from 'react';
import { Button } from '../components/Button';
import { Check } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { benefits, positions } from '../constants/hiring';

export function Hiring() {
  return <div className="min-h-screen bg-[#0B0F19] text-gray-100">
    <Helmet>
      <title>加入我们 - METACHRON</title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Helmet>
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">加入我们</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          与顶尖人才一起，打造下一代 AI 开发平台
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {benefits.map((benefit, index) => <div key={index} className="bg-[#151A2D] border border-gray-800 rounded-lg p-6">
            <div className="w-12 h-12 rounded-lg bg-[#00B5AD]/10 flex items-center justify-center mb-4">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
            <p className="text-gray-400">{benefit.description}</p>
          </div>)}
      </div>
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center mb-12">当前职位</h2>
        {positions.map((position, index) => <div key={index} className="bg-[#151A2D] border border-gray-800 rounded-lg p-6">
            <div className="flex flex-wrap justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="text-[#00B5AD]">
                    {position.department}
                  </span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-400">{position.type}</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-400">{position.location}</span>
                </div>
              </div>
              <Button>立即申请</Button>
            </div>
            <p className="text-gray-400 mb-4">{position.description}</p>
            <div className="space-y-2">
              <p className="font-medium mb-2">职位要求：</p>
              {position.requirements.map((req, idx) => <div key={idx} className="flex items-start">
                  <Check className="w-5 h-5 text-[#00B5AD] mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">{req}</span>
                </div>)}
            </div>
          </div>)}
      </div>
    </div>
  </div>;
}