import React, { useState } from 'react';
import { Button } from '../components/Button';
import { durationOptions } from '../constants/pricing';
import { OrderModalProps } from '../types/props';

export function OrderModal({ open, onClose, plan, features }: OrderModalProps) {
  const [duration, setDuration] = useState(1);
  const [agree, setAgree] = useState(false);
  // 动画状态
  const [show, setShow] = useState(open);
  const [animClass, setAnimClass] = useState('opacity-0 scale-95');
  React.useEffect(() => {
    if (open) {
      setShow(true);
      setTimeout(() => setAnimClass('opacity-100 scale-100'), 10);
    } else {
      setAnimClass('opacity-0 scale-95');
      const t = setTimeout(() => setShow(false), 400);
      return () => clearTimeout(t);
    }
  }, [open]);
  if (!open && !show) return null;
  if (!plan) return null;
  let pricePerMonth = 0;
  if (typeof plan.price === 'number') {
    pricePerMonth = plan.price;
  } else if (typeof plan.price === 'string') {
    const match = plan.price.match(/\d+/g);
    if (match) {
      pricePerMonth = Number(match.join(''));
    }
  }
  // 折扣
  const selectedOption = durationOptions.find(opt => opt.value === duration) || durationOptions[0];
  const total = Math.round(pricePerMonth * duration * selectedOption.discount * 100) / 100;
  // 到期时间
  const now = new Date();
  const expire = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  expire.setMonth(expire.getMonth() + duration);
  const expireStr = `${expire.getFullYear()}年${String(expire.getMonth() + 1).padStart(2, '0')}月${String(expire.getDate()).padStart(2, '0')}日 23:59:59`;
  return (
    <div className={`fixed inset-0 z-[99999] flex items-center justify-center bg-black/40 transition-opacity duration-400 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`bg-[#181F2D] rounded-lg shadow-2xl p-8 w-full max-w-4xl relative transform transition-all duration-400 ${animClass}`}>
        <button className="absolute top-3 right-3 text-gray-400 hover:text-white" onClick={onClose}>✕</button>
        <h2 className="text-2xl font-bold mb-6 text-[#00B5AD]">下单：{plan.name}</h2>
        <div className="mb-6">
          <div className="font-semibold mb-2">该版本包含：</div>
          <ul className="list-disc pl-5 text-gray-300 mb-2">
            {features.map((f: string, i: number) => f && <li key={i}>{f}</li>)}
          </ul>
        </div>
        {/* 购买时长、到期时间、费用 纵向排列 */}
        <div className="mb-6 flex flex-col items-start gap-6">
          {/* 购买时长选项 */}
          <div className="flex flex-col items-start w-full min-w-[220px]">
            <div className="mb-2 font-semibold">购买时长</div>
            <div className="flex flex-nowrap gap-2 overflow-x-auto w-full pb-1">
              {durationOptions.map(opt => (
                <button
                  key={opt.value}
                  className={`px-4 py-2 rounded border text-sm font-medium relative transition-all duration-150
                    ${duration === opt.value ? 'border-[#00B5AD] bg-[#0B0F19] text-[#00B5AD]' : 'border-gray-700 bg-[#151A2D] text-gray-200 hover:border-[#00B5AD]'}
                  `}
                  onClick={() => setDuration(opt.value)}
                >
                  {opt.label}
                  {opt.tag && <span className="ml-2 px-1.5 py-0.5 bg-yellow-400 text-xs text-black rounded align-middle">{opt.tag}</span>}
                </button>
              ))}
            </div>
          </div>
          {/* 到期时间 */}
          <div className="flex flex-col items-start min-w-[200px]">
            <div className="mb-2 font-semibold">到期时间</div>
            <div className="text-gray-400 font-semibold">{expireStr}</div>
          </div>
          {/* 费用 */}
          <div className="flex flex-col items-start min-w-[120px]">
            <div className="mb-2 font-semibold">费用</div>
            <div className="text-2xl font-bold text-[#FF4D4F]">￥{total}</div>
          </div>
        </div>
        {/* 协议勾选 */}
        <div className="mb-6 flex items-center">
          <input type="checkbox" id="agree" checked={agree} onChange={e => setAgree(e.target.checked)} className="mr-2" />
          <label htmlFor="agree" className="text-sm text-gray-300 select-none">
            已阅读并同意
            <a href="#" className="text-[#00B5AD] underline mx-1" target="_blank" rel="noopener noreferrer">《METACHRON服务条款》</a>
            和
            <a href="#" className="text-[#00B5AD] underline mx-1" target="_blank" rel="noopener noreferrer">《METACHRON退订说明》</a>
          </label>
        </div>
        {/* 分隔线 */}
        <hr className="my-6 border-gray-700" />
        {/* 按钮区 */}
        <div className="flex justify-end gap-4">
          <Button size="sm" variant="outline" className="px-6" onClick={onClose}>取消</Button>
          <Button size="sm" className="px-6" disabled={!agree}>立即下单</Button>
        </div>
      </div>
    </div>
  );
}