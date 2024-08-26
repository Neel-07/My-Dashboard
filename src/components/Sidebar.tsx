import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onRefresh: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onRefresh }) => {
  return (
    <aside
      className={`fixed top-0 left-0 w-64 h-full bg-indigo-600 p-4 flex flex-col space-y-4 rounded-lg shadow-lg z-50 transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 md:relative md:ml-8 md:mr-8 md:mt-10`}
    >
      <h2 className="font-bold mb-2 flex items-center justify-center font-sans text-2xl text-white">Sidebar</h2>
      <button onClick={onRefresh} className="bg-indigo-400 py-2 px-4 rounded text-white">Option 1</button>
      <button onClick={onRefresh} className="bg-indigo-400 py-2 px-4 rounded text-white">Option 2</button>
      <button onClick={onRefresh} className="bg-indigo-400 py-2 px-4 rounded text-white">Option 3</button>
      <button onClick={onRefresh} className="bg-indigo-400 py-2 px-4 rounded text-white">Option 4</button>
      <div className="mt-auto">
        <h3 className="font-semibold mb-1 text-white">Progress Bar</h3>
        <div className="w-full bg-indigo-300 h-4 rounded">
          <div className="bg-green-500 h-4 rounded" style={{ width: '50%' }}></div>
        </div>
      </div>
      <button onClick={onClose} className="md:hidden bg-red-500 text-white py-2 px-4 rounded mt-4">Close</button>
    </aside>
  );
};

export default Sidebar;
