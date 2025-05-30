
import React from 'react';
import { AppSidebar } from './AppSidebar';
import { StudentSidebar } from './StudentSidebar';
import { AdminSidebar } from './AdminSidebar';
import { TeacherSidebar } from './TeacherSidebar';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Bell, Mail, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface DynamicLayoutProps {
  children: React.ReactNode;
  userType: 'director' | 'student' | 'admin' | 'teacher';
}

const DynamicLayout = ({ children, userType }: DynamicLayoutProps) => {
  const getSidebar = () => {
    switch (userType) {
      case 'student':
        return <StudentSidebar />;
      case 'admin':
        return <AdminSidebar />;
      case 'teacher':
        return <TeacherSidebar />;
      default:
        return <AppSidebar />;
    }
  };

  const getTitle = () => {
    switch (userType) {
      case 'student':
        return 'Portal del Estudiante';
      case 'admin':
        return 'Panel de Administración';
      case 'teacher':
        return 'Portal del Maestro';
      default:
        return 'Sistema de Gestión Escolar';
    }
  };

  const getSubtitle = () => {
    switch (userType) {
      case 'student':
        return 'Área del Estudiante';
      case 'admin':
        return 'Administrador del Sistema';
      case 'teacher':
        return 'Área del Maestro';
      default:
        return 'Panel Administrativo - Director';
    }
  };

  const getUserName = () => {
    switch (userType) {
      case 'student':
        return 'Ana García';
      case 'admin':
        return 'Admin Principal';
      case 'teacher':
        return 'Prof. María González';
      default:
        return 'Director Principal';
    }
  };

  return (
    <>
      {getSidebar()}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{getTitle()}</h1>
                <p className="text-sm text-gray-600">{getSubtitle()}</p>
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
                  <p className="text-sm font-medium text-gray-900">{getUserName()}</p>
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

export default DynamicLayout;
