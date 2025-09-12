import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  MessageCircle, 
  Users, 
  UserCheck,
  Settings,
  HelpCircle
} from 'lucide-react';

const LeftSidebar = ({ onPageChange }) => {
  const [activePage, setActivePage] = useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, component: 'Dashboard' },
    { name: 'AI Chatbot', icon: MessageCircle, component: 'AIChatbot' },
    { name: 'For Professionals', icon: Users, component: 'ForProfessionals' },
    { name: 'For Patients', icon: UserCheck, component: 'ForPatients' },
  ];

  const bottomMenuItems = [
    { name: 'Settings', icon: Settings, component: 'Settings' },
    { name: 'Help & Support', icon: HelpCircle, component: 'HelpSupport' },
  ];

  const handleMenuClick = (item) => {
    setActivePage(item.name);
    onPageChange(item.component);
  };

  const MenuItem = ({ item, isActive }) => (
    <div
      onClick={() => handleMenuClick(item)}
      className={`flex items-center px-4 py-3 mx-2 rounded-lg cursor-pointer transition-colors duration-200 ${
        isActive 
          ? 'bg-blue-100 text-blue-700' 
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <item.icon size={20} className="mr-3" />
      <span className="text-sm font-medium">{item.name}</span>
    </div>
  );

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* Logo Section */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
            <div className="w-4 h-4 bg-white rounded-full relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>
          <span className="text-xl font-semibold text-gray-800">ScanSehati</span>
        </div>
      </div>

      {/* Main Menu */}
      <div className="flex-1 py-4">
        {menuItems.map((item) => (
          <MenuItem 
            key={item.name} 
            item={item} 
            isActive={activePage === item.name} 
          />
        ))}
      </div>

      {/* Bottom Menu */}
      <div className="py-4 border-t border-gray-200">
        {bottomMenuItems.map((item) => (
          <MenuItem 
            key={item.name} 
            item={item} 
            isActive={activePage === item.name} 
          />
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;