export const plans = [{
    name: '基础版',
    price: '￥50/月',
    features: ['100个Agent额度', '完整组件库访问', 'API调用', '监控和优化', '云原生IDE']
  }, {
    name: '专业版',
    price: '￥200/月',
    featured: true,
    features: ['500个Agent额度', '完整组件库访问', 'API调用', '监控和优化', '云原生IDE', '团队协作功能', '自定义集成接口', '智能数据分析']
  }, {
    name: '企业版',
    price: '联系销售',
    features: ['无限Agent额度', '完整组件库访问', 'API调用', '监控和优化', '云原生IDE', '团队协作功能', '自定义集成接口',  '智能数据分析', '智能故障分析运维', '专属训练资源', '专属数据隔离', 'SLA保障']
  }];

  export const functionalTable = [
    {
      name: 'Agent额度',
      free: '5',
      basic: '100',
      professional: '500',
      enterprise: '不限'
    },
    {
      name: '组件库访问',
      free: '✔️',
      basic: '✔️',
      professional: '✔️',
      enterprise: '✔️'
    },
    {
      name: '云原生IDE',
      free: '✔️',
      basic: '✔️',
      professional: '✔️',
      enterprise: '✔️'
    },
    {
      name: 'API 调用数',
      free: '50',
      basic: '1,000',
      professional: '100,00',
      enterprise: '不限'
    },
    {
      name: '监控和优化',
      free: '—',
      basic: '✔️',
      professional: '✔️',
      enterprise: '✔️'
    },
    {
      name: '团队协作',
      free: '—',
      basic: '—',
      professional: '✔️',
      enterprise: '✔️'
    },
    {
      name: '智能数据分析',
      free: '—',
      basic: '—',
      professional: '✔️',
      enterprise: '✔️'
    },
    {
      name: '智能故障分析运维',
      free: '—',
      basic: '—',
      professional: '—',
      enterprise: '✔️'
    },
    {
      name: '专属训练资源',
      free: '—',
      basic: '—',
      professional: '—',
      enterprise: '✔️'
    },
    {
      name: '专属数据隔离',
      free: '—',
      basic: '—',
      professional: '—',
      enterprise: '✔️'
    },
    {
      name: 'SLA保障',
      free: '—',
      basic: '—',
      professional: '—',
      enterprise: '✔️'
    }
  ]
// 购买时长和折扣配置
export const durationOptions = [
    { label: '1个月', value: 1, discount: 1 },
    { label: '2个月', value: 2, discount: 1 },
    { label: '3个月', value: 3, discount: 1 },
    { label: '4个月', value: 4, discount: 1 },
    { label: '5个月', value: 5, discount: 1 },
    { label: '6个月', value: 6, discount: 0.95, tag: '9.5折' },
    { label: '1年', value: 12, discount: 0.9, tag: '9折' },
    { label: '2年', value: 24, discount: 0.85, tag: '8.5折' },
  ];

  // 取功能对照表中该planName列所有有✔️或具体值的项
export const keyMap: { [k: string]: 'free' | 'basic' | 'professional' | 'enterprise' } = {
    '试用版': 'free',
    '基础版': 'basic',
    '专业版': 'professional',
    '企业版': 'enterprise',
  };
