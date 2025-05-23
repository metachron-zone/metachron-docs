import { Book, Coffee, Globe, Heart, Users, Zap } from "lucide-react";

export const positions = [{
    title: '高级后端工程师',
    department: '研发部',
    type: '全职',
    location: '深圳',
    description: '负责 METACHRON 平台的后端开发，优化用户体验，实现产品功能。',
    requirements: ['3年以上后端开发经验', '精通 Go、Python、Rust 等语言', '熟悉现代后端工程化工具', '有良好的产品意识和团队协作能力']
  }, {
    title: 'AI 算法工程师',
    department: 'AI Lab',
    type: '全职',
    location: '深圳',
    description: '负责智能体核心算法研发，优化模型性能。',
    requirements: ['机器学习或相关领域硕士以上学历', '熟悉深度学习框架', '有强化学习项目经验', '良好的算法实现和优化能力']
  }, {
    title: '产品经理',
    department: '产品部',
    type: '全职',
    location: '深圳',
    description: '负责 METACHRON 平台产品规划和功能设计。',
    requirements: ['3年以上 ToB 产品经理经验', '熟悉 AI 或开发工具产品', '优秀的产品思维和沟通能力', '有技术背景优先']
  }, {
    title: '销售经理',
    department: '销售部',
    type: '全职',
    location: '深圳',
    description: '负责 METACHRON 平台销售工作，拓展市场。',
    requirements: ['3年以上销售经验', '熟悉 AI 或开发工具产品', '优秀的产品思维和沟通能力', '有技术背景优先']
  }];
  
  export const benefits = [{
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
  }, {
    icon: <Heart className="w-6 h-6 text-[#00B5AD]" />,
    title: '健康关怀',
    description: '完善的五险一金，年度体检及健康关怀计划'
  }];