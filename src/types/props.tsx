// 下单弹窗组件
export interface OrderModalProps {
  open: boolean;
  onClose: () => void;
  plan: { name: string; price: number | string } | null;
  features: string[];
}
