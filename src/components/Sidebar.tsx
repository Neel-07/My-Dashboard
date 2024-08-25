import React from 'react';

interface SidebarProps {
  onRefresh: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onRefresh }) => {
  return (
    <aside className="ml-8 mr-8 mt-10  w-64 h-full bg-indigo-600 p-4 flex flex-col space-y-4 rounded-lg shadow-lg">
      <h2 className="font-bold mb-2 flex items-center justify-center font-sans text-2xl text-white">Sidebar</h2>
      <button onClick={onRefresh} className="bg-indigo-400 py-2 px-4 rounded text-white">Option 1</button>
      <button onClick={onRefresh} className="bg-indigo-400 py-2 px-4 rounded text-white">Option 2</button>
      <button  onClick={onRefresh} className="bg-indigo-400 py-2 px-4 rounded text-white">Option 3</button>
      <button  onClick={onRefresh} className="bg-indigo-400 py-2 px-4 rounded text-white">Option 4</button>
      <div className="mt-auto">
        <h3 className="font-semibold mb-1 text-white">Progress Bar</h3>
        <div className="w-full bg-indigo-300 h-4 rounded">
          <div className="bg-green-500 h-4 rounded" style={{ width: '50%' }}></div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
