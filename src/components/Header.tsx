import React, { useState } from 'react';
import { Button } from './Button';
import { LoginModal } from './LoginModal';
import { Avatar } from './Avatar';
import { Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  // This would normally come from your auth state management
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userAvatar, setUserAvatar] = useState('');
  return <>
      <header className="border-b border-gray-800 bg-[#0B0F19]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className={`h-8 w-8 rounded-md bg-[#17c3ce] flex items-center justify-center mr-3`}>
                <Bot size={20} className="text-[#0d121f]" />
              </div>
              <span className="text-[#00B5AD] font-bold text-xl">METACHRON</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-gray-300 hover:text-[#00B5AD] transition-colors">
              功能
            </Link>
            <Link to="/ecosystem" className="text-gray-300 hover:text-[#00B5AD] transition-colors">
              生态系统
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-[#00B5AD] transition-colors">
              价格
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-[#00B5AD] transition-colors">
              关于我们
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            {!isLoggedIn ? <>
                <Button variant="outline" size="sm" onClick={() => setIsLoginModalOpen(true)}>
                  登录
                </Button>
                <Button size="sm">开始使用</Button>
                <Avatar />
              </> : <Avatar src={userAvatar} />}
          </div>
        </div>
      </header>
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>;
}