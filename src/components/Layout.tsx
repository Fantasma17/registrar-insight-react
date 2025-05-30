
import React from 'react';
import { AppSidebar } from './AppSidebar';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Bell, Mail, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <AppSidebar />
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Sistema de Gestión Escolar</h1>
                <p className="text-sm text-gray-600">Panel Administrativo - Director</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Mail className="h-6 w-6 text-gray-600 cursor-pointer hover:text-blue-600 transition-colors" />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-green-500 text-xs flex items-center justify-center p-0">
                  4
                </Badge>
              </div>
              <div className="relative">
                <Bell className="h-6 w-6 text-gray-600 cursor-pointer hover:text-blue-600 transition-colors" />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-xs flex items-center justify-center p-0">
                  9
                </Badge>
              </div>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-900">Director Principal</p>
                  <p className="text-xs text-gray-600">En línea</p>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Main content */}
        <main className="flex-1 bg-gray-50 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
