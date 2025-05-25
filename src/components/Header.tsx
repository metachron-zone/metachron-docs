import React, { useState, useRef, useEffect } from 'react';
import { Button } from './Button';
import { LoginModal } from './LoginModal';
import { Avatar } from './Avatar';
import { Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userAvatar, setUserAvatar] = useState('');
  const [userName, setUserName] = useState('游客');
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // 每次刷新页面都尝试用localStorage中的JWT恢复session
  useEffect(() => {
    const jwt = localStorage.getItem('sb-jwt');
    if (jwt) {
      supabase.auth.setSession({ access_token: jwt, refresh_token: jwt }).then(async ({ data }) => {
        if (data?.session) {
          setIsLoggedIn(true);
          setUserAvatar(data.session.user.user_metadata?.avatar_url || '');
          setUserName(data.session.user.user_metadata?.user_name || data.session.user.user_metadata?.full_name || '游客');
        }
      });
    }
  }, []);

  // 登录后自动获取用户信息，并存储JWT
  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error(error);
      } else if (data?.session) {
        setIsLoggedIn(true);
        setUserAvatar(data.session.user.user_metadata?.avatar_url || '');
        setUserName(data.session.user.user_metadata?.user_name || data.session.user.user_metadata?.full_name || '游客');
        localStorage.setItem('sb-jwt', data.session.access_token);
      } else {
        setIsLoggedIn(false);
        setUserAvatar('');
        localStorage.removeItem('sb-jwt');
      }
    };
    getUser();
    // 监听auth变化，登录后强制刷新用户信息
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        setIsLoggedIn(true);
        setUserAvatar(session.user.user_metadata?.avatar_url || '');
        setUserName(session.user.user_metadata?.user_name || session.user.user_metadata?.full_name || '游客');
        localStorage.setItem('sb-jwt', session.access_token);
      } else if (event === 'SIGNED_OUT') {
        setIsLoggedIn(false);
        setUserAvatar('');
        setUserName('游客');
        localStorage.removeItem('sb-jwt');
      } else {
        getUser();
      }
    });
    return () => { listener?.subscription.unsubscribe(); };
  }, []);

  // 点击登出
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsLoggedIn(false);
    setShowMenu(false);
    setUserAvatar('');
    localStorage.removeItem('sb-jwt');
  };

  // 点击页面其他地方关闭菜单
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    }
    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showMenu]);

  return <>
      <header className="border-b border-gray-800 bg-[#0B0F19] relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-full h-0.5 pointer-events-none">
          <div className="h-full w-full animate-glow-gradient bg-gradient-to-r from-[#00B5AD] via-[#00B5AD]/40 to-transparent opacity-40" />
        </div>
        <div className="container mx-auto px-4 py-4 flex items-center relative">
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className={`h-8 w-8 rounded-md bg-[#17c3ce] flex items-center justify-center mr-3`}>
                <Bot size={20} className="text-[#0d121f]" />
              </div>
              <span className="text-[#00B5AD] font-bold text-xl">METACHRON</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
          <div className="flex items-center flex-shrink-0 ml-auto">
            <div className="relative" ref={menuRef}>
              <div onClick={() => setShowMenu(v => !v)} className="cursor-pointer">
                <Avatar src={userAvatar} />
              </div>
              {showMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-[#151A2D] border border-gray-800 rounded-lg shadow-lg z-50">
                  {!isLoggedIn ? (
                    <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-[#222c3a] transition-colors" onClick={() => { setIsLoginModalOpen(true); setShowMenu(false); }}>登录</button>
                  ) : <>
                    <div className="px-4 py-3 border-b border-gray-800">
                      <div className="font-bold text-white mb-1">个人资料</div>
                      <div className="text-xs text-gray-400 break-all">{userAvatar ? <img src={userAvatar} alt="avatar" className="w-8 h-8 rounded-full inline-block mr-2" /> : null} {userName}</div>
                    </div>
                    <button className="w-full text-left px-4 py-2 text-gray-300 hover:bg-[#222c3a] transition-colors" onClick={handleLogout}>登出</button>
                  </>}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>;
}