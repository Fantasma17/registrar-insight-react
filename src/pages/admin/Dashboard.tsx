
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Shield, Database, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const AdminDashboard = () => {
  const systemStats = [
    {
      title: 'Usuarios Totales',
      value: '1,247',
      change: '+5.2%',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Usuarios Activos',
      value: '1,189',
      change: '+2.1%',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      title: 'Alertas Activas',
      value: '3',
      change: '-12%',
      icon: AlertTriangle,
      color: 'text-red-600'
    },
    {
      title: 'Procesos en Curso',
      value: '7',
      change: '+1',
      icon: Clock,
      color: 'text-yellow-600'
    }
  ];

  const recentAlerts = [
    {
      type: 'warning',
      message: 'Respaldo de base de datos completado con advertencias',
      time: 'Hace 2 horas'
    },
    {
      type: 'info',
      message: 'Nuevo usuario registrado: Prof. Ana Martínez',
      time: 'Hace 4 horas'
    },
    {
      type: 'success',
      message: 'Actualización del sistema completada exitosamente',
      time: 'Ayer'
    }
  ];

  const systemHealth = [
    { service: 'Base de Datos', status: 'Operativo', uptime: '99.9%' },
    { service: 'Servidor Web', status: 'Operativo', uptime: '99.8%' },
    { service: 'Sistema de Archivos', status: 'Mantenimiento', uptime: '98.5%' },
    { service: 'Autenticación', status: 'Operativo', uptime: '100%' }
  ];

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'warning':
        return 'bg-yellow-50 border-yellow-200';
      case 'info':
        return 'bg-blue-50 border-blue-200';
      case 'success':
        return 'bg-green-50 border-green-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Operativo':
        return 'bg-green-100 text-green-800';
      case 'Mantenimiento':
        return 'bg-yellow-100 text-yellow-800';
      case 'Error':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Administrativo</h1>
          <p className="text-gray-600">Vista general del sistema y alertas</p>
        </div>
        <Badge className="bg-green-100 text-green-800">
          <CheckCircle className="h-4 w-4 mr-1" />
          Sistema Operativo
        </Badge>
      </div>

      {/* Estadísticas principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {systemStats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change} desde el mes pasado</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Alertas del sistema */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Alertas del Sistema
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentAlerts.map((alert, index) => (
              <div key={index} className={`p-3 rounded-lg border ${getAlertColor(alert.type)}`}>
                <p className="text-sm font-medium">{alert.message}</p>
                <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Estado del sistema */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Estado del Sistema
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {systemHealth.map((service, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">{service.service}</p>
                  <p className="text-xs text-gray-500">Uptime: {service.uptime}</p>
                </div>
                <Badge className={getStatusColor(service.status)}>
                  {service.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Actividad reciente */}
      <Card>
        <CardHeader>
          <CardTitle>Actividad Reciente del Sistema</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg">
              <Users className="h-5 w-5 text-blue-600" />
              <div className="flex-1">
                <p className="text-sm font-medium">5 nuevos usuarios registrados</p>
                <p className="text-xs text-gray-600">Estudiantes y profesores agregados al sistema</p>
                <p className="text-xs text-gray-500">Hace 1 hora</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-3 bg-green-50 rounded-lg">
              <Shield className="h-5 w-5 text-green-600" />
              <div className="flex-1">
                <p className="text-sm font-medium">Políticas de seguridad actualizadas</p>
                <p className="text-xs text-gray-600">Nuevas reglas de acceso implementadas</p>
                <p className="text-xs text-gray-500">Hace 3 horas</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-3 bg-yellow-50 rounded-lg">
              <Database className="h-5 w-5 text-yellow-600" />
              <div className="flex-1">
                <p className="text-sm font-medium">Respaldo programado ejecutado</p>
                <p className="text-xs text-gray-600">Respaldo completo de la base de datos</p>
                <p className="text-xs text-gray-500">Hace 6 horas</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
