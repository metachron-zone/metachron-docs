import { Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Footer() {
  return <footer className="bg-[#0A0E17] border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded bg-[#00B5AD] flex items-center justify-center mr-2">
                <Bot size={20} className="text-[#0d121f]" />
              </div>
              <span className="text-[#00B5AD] font-bold text-xl">
                METACHRON
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              智能体即服务平台，释放 AI 的无限可能
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">产品</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/features" className="hover:text-[#00B5AD]">
                  智能体工坊
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-[#00B5AD]">
                  优化引擎
                </Link>
              </li>
              <li>
                <Link to="/ecosystem" className="hover:text-[#00B5AD]">
                  生态市场
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-[#00B5AD]">
                  企业方案
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">资源</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-[#00B5AD]">
                  文档中心
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00B5AD]">
                  API 参考
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00B5AD]">
                  社区论坛
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00B5AD]">
                  教程
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">公司</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/about" className="hover:text-[#00B5AD]">
                  关于我们
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-[#00B5AD]">
                  博客
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#00B5AD]">
                  联系我们
                </Link>
              </li>
              <li>
                <Link to="/hiring" className="hover:text-[#00B5AD]">
                  招贤纳士
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 深圳异时网络科技 保留所有权利
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#00B5AD]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#00B5AD]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#00B5AD]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>;
}