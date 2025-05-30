
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, User, Shield, Users } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const userTypes = [
    {
      title: 'Director',
      description: 'Panel administrativo completo con gestión de matrícula, documentos y reportes',
      icon: Shield,
      color: 'bg-blue-600 hover:bg-blue-700',
      path: '/dashboard',
      features: ['Gestión de Matrícula', 'Documentos Oficiales', 'Control de Expedientes', 'Reportes Administrativos']
    },
    {
      title: 'Estudiante',
      description: 'Portal del estudiante con acceso a calificaciones, tareas y comunicación',
      icon: User,
      color: 'bg-green-600 hover:bg-green-700',
      path: '/student/dashboard',
      features: ['Mi Perfil', 'Calificaciones', 'Tareas y Material', 'Historial Académico']
    },
    {
      title: 'Administrador',
      description: 'Sistema de administración avanzado con control total del sistema',
      icon: Users,
      color: 'bg-red-600 hover:bg-red-700',
      path: '/admin/dashboard',
      features: ['Gestión de Usuarios', 'Control de Roles', 'Configuración del Sistema', 'Seguridad']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 p-4 rounded-full">
              <GraduationCap className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">EduAdmin</h1>
          <p className="text-xl text-gray-600 mb-2">Sistema de Gestión Escolar</p>
          <p className="text-gray-500">Selecciona tu tipo de usuario para acceder al sistema</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {userTypes.map((userType) => (
            <Card key={userType.title} className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-blue-200">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full ${userType.color}`}>
                    <userType.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold">{userType.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-center">{userType.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-gray-700">Funcionalidades principales:</h4>
                  <ul className="space-y-1">
                    {userType.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className={`w-full ${userType.color} text-white`}
                  onClick={() => navigate(userType.path)}
                  size="lg"
                >
                  Acceder como {userType.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            © 2024 EduAdmin - Sistema de Gestión Escolar Integral
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
