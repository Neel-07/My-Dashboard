import React from 'react';

interface FeatureCardProps {
  title: string;
  label: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, label, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start">
      <div className="bg-blue-100 text-blue-600 py-1 px-3 rounded-full text-xs font-semibold mb-2">
        {label}
      </div>
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
        Know More
      </button>
    </div>
  );
};

export default FeatureCard;

