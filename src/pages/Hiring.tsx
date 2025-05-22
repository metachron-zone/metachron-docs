import React from 'react';
import { Button } from '../components/Button';
import { Check, Coffee, Users, Zap, Globe, Book } from 'lucide-react';
export function Hiring() {
  const positions = [{
    title: '高级前端工程师',
    department: '研发部',
    type: '全职',
    location: '深圳',
    description: '负责 METACHRON 平台的前端开发，优化用户体验，实现产品功能。',
    requirements: ['3年以上前端开发经验', '精通 React、TypeScript', '熟悉现代前端工程化工具', '有良好的产品意识和团队协作能力']
  }, {
    title: 'AI 研究工程师',
    department: 'AI Lab',
    type: '全职',
    location: '深圳',
    description: '负责智能 Agent 核心算法研发，优化模型性能。',
    requirements: ['机器学习或相关领域硕士以上学历', '熟悉深度学习框架', '有强化学习项目经验', '良好的算法实现和优化能力']
  }, {
    title: '产品经理',
    department: '产品部',
    type: '全职',
    location: '深圳',
    description: '负责 METACHRON 平台产品规划和功能设计。',
    requirements: ['3年以上 ToB 产品经理经验', '熟悉 AI 或开发工具产品', '优秀的产品思维和沟通能力', '有技术背景优先']
  }];
  const benefits = [{
    icon: <Coffee className="w-6 h-6 text-[#00B5AD]" />,
    title: '工作环境',
    description: '宽敞明亮的办公环境，免费咖啡和零食'
  }, {
    icon: <Users className="w-6 h-6 text-[#00B5AD]" />,
    title: '团队文化',
    description: '开放平等的交流氛围，定期团建活动'
  }, {
    icon: <Zap className="w-6 h-6 text-[#00B5AD]" />,
    title: '职业发展',
    description: '完善的培训体系，清晰的晋升通道'
  }, {
    icon: <Globe className="w-6 h-6 text-[#00B5AD]" />,
    title: '国际化视野',
    description: '与全球顶尖科技公司合作机会'
  }, {
    icon: <Book className="w-6 h-6 text-[#00B5AD]" />,
    title: '持续学习',
    description: '学习资源补贴，技术分享会'
  }];
  return <div className="min-h-screen bg-[#0B0F19] text-gray-100">
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