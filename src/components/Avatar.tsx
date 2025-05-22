import React from 'react';
import { User } from 'lucide-react';
interface AvatarProps {
  src?: string;
  alt?: string;
}
export function Avatar({
  src,
  alt
}: AvatarProps) {
  if (!src) {
    return <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
        <User className="w-5 h-5 text-gray-400" />
      </div>;
  }
  return <img src={src} alt={alt || 'User avatar'} className="w-8 h-8 rounded-full object-cover" />;
}