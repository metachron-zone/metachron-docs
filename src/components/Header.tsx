import React, { useState } from 'react';
import { Button } from './Button';
import { LoginModal } from './LoginModal';
import { Avatar } from './Avatar';
export function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  // This would normally come from your auth state management
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userAvatar, setUserAvatar] = useState('');
  return <>
      <header className="border-b border-gray-800 bg-[#0B0F19]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded bg-[#00B5AD] flex items-center justify-center mr-2">
              <img src="/logo.png" alt="METACHRON Logo" className="w-5 h-5" />
            </div>
            <span className="text-[#00B5AD] font-bold text-xl">METACHRON</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-[#00B5AD] transition-colors">
              功能
            </a>
            <a href="#ecosystem" className="text-gray-300 hover:text-[#00B5AD] transition-colors">
              生态系统
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-[#00B5AD] transition-colors">
              价格
            </a>
            <a href="#about" className="text-gray-300 hover:text-[#00B5AD] transition-colors">
              关于我们
            </a>
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