
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, ClipboardCheck, AlertCircle, Calendar, Clock } from 'lucide-react';

const TeacherDashboard = () => {
  const stats = [
    {
      title: 'Clases Asignadas',
      value: '6',
      icon: BookOpen,
      color: 'bg-blue-500',
    },
    {
      title: 'Total Estudiantes',
      value: '156',
      icon: Users,
      color: 'bg-green-500',
    },
    {
      title: 'Asistencia Hoy',
      value: '92%',
      icon: ClipboardCheck,
      color: 'bg-purple-500',
    },
    {
      title: 'Tareas Pendientes',
      value: '12',
      icon: AlertCircle,
      color: 'bg-orange-500',
    },
  ];

  const upcomingClasses = [
    { subject: 'Matemáticas 8A', time: '08:00 - 09:00', students: 26 },
    { subject: 'Matemáticas 8B', time: '09:00 - 10:00', students: 24 },
    { subject: 'Álgebra 9A', time: '11:00 - 12:00', students: 28 },
  ];

  const recentActivities = [
    { activity: 'Calificaciones subidas - Matemáticas 8A', time: 'Hace 2 horas' },
    { activity: 'Material didáctico publicado - Álgebra', time: 'Hace 4 horas' },
    { activity: 'Asistencia registrada - Matemáticas 8B', time: 'Ayer' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard del Maestro</h1>
        <p className="text-gray-600">Resumen de actividades y próximas clases</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Próximas Clases */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Próximas Clases de Hoy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingClasses.map((class_, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{class_.subject}</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      {class_.time}
                    </div>
                  </div>
                  <Badge variant="secondary">
                    {class_.students} estudiantes
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Actividades Recientes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              Actividades Recientes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm text-gray-900">{activity.activity}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeacherDashboard;
