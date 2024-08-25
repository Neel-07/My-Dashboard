import React from 'react';

const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <div className="mt-4">
      <div className="w-full bg-gray-500 rounded-full">
        <div
          className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
          style={{ width: `${progress}%` }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
