import React from 'react';
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}
export function FeatureCard({
  icon,
  title,
  description,
  image
}: FeatureCardProps) {
  return <div className="bg-[#151A2D] border border-gray-800 rounded-lg overflow-hidden transition-all hover:shadow-lg hover:shadow-[#00B5AD]/10 hover:-translate-y-1">
      <div className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
      </div>
      <div className="border-t border-gray-800">
        <img src={image} alt={title} className="w-full h-auto" />
      </div>
    </div>;
}