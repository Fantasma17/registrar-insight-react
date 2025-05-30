
import React from 'react';
import { 
  LayoutDashboard, 
  User, 
  BookOpen, 
  Clock, 
  Users,
  ClipboardCheck,
  FileText,
  BarChart3,
  GraduationCap
} from 'lucide-react';
import { useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from '@/components/ui/sidebar';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    title: 'Dashboard',
    url: '/teacher/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Mis Clases',
    url: '/teacher/classes',
    icon: BookOpen,
  },
  {
    title: 'Asistencia',
    url: '/teacher/attendance',
    icon: ClipboardCheck,
  },
  {
    title: 'Calificaciones',
    url: '/teacher/grades',
    icon: Users,
  },
  {
    title: 'Comportamiento',
    url: '/teacher/behavior',
    icon: Clock,
  },
  {
    title: 'Material Didáctico',
    url: '/teacher/materials',
    icon: FileText,
  },
  {
    title: 'Reportes',
    url: '/teacher/reports',
    icon: BarChart3,
  },
  {
    title: 'Mi Perfil',
    url: '/teacher/profile',
    icon: User,
  },
];

export function TeacherSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="border-b border-gray-200 p-6">
        <div className="flex items-center gap-3">
          <div className="bg-purple-600 p-2 rounded-lg">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">EduAdmin</h2>
            <p className="text-xs text-gray-600">Portal Maestro</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
            Área del Maestro
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={location.pathname === item.url}
                    className="w-full justify-start"
                  >
                    <Link to={item.url} className="flex items-center gap-3 px-3 py-2 rounded-lg">
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
