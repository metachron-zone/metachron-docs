import React from 'react';
import { Button } from '../components/Button';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
export function About() {
  return <div className="min-h-screen bg-[#0B0F19] text-gray-100">
    <Helmet>
      <title>关于我们 - METACHRON</title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Helmet>
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">关于我们</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            深圳异时网络科技致力于打造新一代智能Agent开发与管理平台
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-bold mb-6">我们的使命</h2>
            <p className="text-gray-400 mb-8">
              让AI
              Agent开发变得简单高效，助力企业快速构建和部署智能化解决方案。我们相信，通过降低AI开发门槛，能够释放更多创新潜能，推动产业智能化升级。
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#151A2D] border border-gray-800 rounded-lg p-6">
                <div className="text-3xl font-bold text-[#00B5AD] mb-2">
                  50+
                </div>
                <p className="text-gray-400">企业客户</p>
              </div>
              <div className="bg-[#151A2D] border border-gray-800 rounded-lg p-6">
                <div className="text-3xl font-bold text-[#00B5AD] mb-2">
                  200+
                </div>
                <p className="text-gray-400">团队成员</p>
              </div>
            </div>
          </div>
          <div>
            <img src="/agent_workshop.png" alt="Our Mission" className="rounded-lg border border-gray-800" />
          </div>
        </div>
        <div className="bg-[#151A2D] border border-gray-800 rounded-lg p-8 md:p-12 mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center">
            我们的核心价值观
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#00B5AD]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#00B5AD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">创新驱动</h3>
              <p className="text-gray-400">持续创新，推动技术边界</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#00B5AD]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#00B5AD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">用户至上</h3>
              <p className="text-gray-400">以用户需求为核心</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#00B5AD]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#00B5AD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">开放共赢</h3>
              <p className="text-gray-400">构建开放生态系统</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-8">加入我们</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            我们正在寻找优秀的人才加入团队，一起打造下一代AI开发平台
          </p>
          <Button size="lg">
            <Link to="/hiring">查看职位</Link>
          </Button>
        </div>
      </div>
    </div>;
}