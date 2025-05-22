import React, { lazy } from 'react';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
export function Contact() {
  return <div className="min-h-screen bg-[#0B0F19] text-gray-100">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">联系我们</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            我们期待与您沟通交流，为您提供专业的技术支持和服务
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <div className="bg-[#151A2D] border border-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">联系方式</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00B5AD]/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#00B5AD]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">电子邮件</p>
                    <p>contact@metachron.ai</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00B5AD]/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#00B5AD]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">电话</p>
                    <p>400-888-8888</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00B5AD]/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#00B5AD]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">地址</p>
                    <p>深圳市南山区科技园</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#151A2D] border border-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">在线支持</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00B5AD]/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-[#00B5AD]" />
                  </div>
                  <div>
                    <p className="font-medium">7x24小时在线客服</p>
                    <p className="text-sm text-gray-400">平均响应时间：5分钟</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#151A2D] border border-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">发送消息</h2>
            <form className="space-y-4">
              <div>
                <label className="text-sm text-gray-400 block mb-2">姓名</label>
                <input type="text" className="w-full bg-[#0B0F19] border border-gray-800 rounded-lg px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00B5AD]" placeholder="请输入您的姓名" />
              </div>
              <div>
                <label className="text-sm text-gray-400 block mb-2">邮箱</label>
                <input type="email" className="w-full bg-[#0B0F19] border border-gray-800 rounded-lg px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00B5AD]" placeholder="请输入您的邮箱" />
              </div>
              <div>
                <label className="text-sm text-gray-400 block mb-2">主题</label>
                <input type="text" className="w-full bg-[#0B0F19] border border-gray-800 rounded-lg px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00B5AD]" placeholder="请输入主题" />
              </div>
              <div>
                <label className="text-sm text-gray-400 block mb-2">
                  消息内容
                </label>
                <textarea className="w-full bg-[#0B0F19] border border-gray-800 rounded-lg px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00B5AD] h-32" placeholder="请输入您的消息内容" />
              </div>
              <Button className="w-full">发送消息</Button>
            </form>
          </div>
        </div>
        <div className="bg-[#151A2D] border border-gray-800 rounded-lg p-8">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.0087577225544!2d114.0576!3d22.5445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDMyJzQwLjIiTiAxMTTCsDAzJzI3LjQiRQ!5e0!3m2!1sen!2s!4v1635739200000!5m2!1sen!2s" width="100%" height="400" style={{
          border: 0
        }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-lg" />
        </div>
      </div>
    </div>;
}