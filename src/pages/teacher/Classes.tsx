
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Calendar, Clock, Eye } from 'lucide-react';

const TeacherClasses = () => {
  const classes = [
    {
      id: 1,
      subject: 'Matemáticas',
      grade: '8A',
      students: 26,
      schedule: 'Lunes, Miércoles, Viernes 08:00-09:00',
      nextClass: 'Hoy 08:00',
      status: 'active'
    },
    {
      id: 2,
      subject: 'Matemáticas',
      grade: '8B',
      students: 24,
      schedule: 'Lunes, Miércoles, Viernes 09:00-10:00',
      nextClass: 'Hoy 09:00',
      status: 'active'
    },
    {
      id: 3,
      subject: 'Álgebra',
      grade: '9A',
      students: 28,
      schedule: 'Martes, Jueves 11:00-12:00',
      nextClass: 'Mañana 11:00',
      status: 'active'
    },
    {
      id: 4,
      subject: 'Álgebra',
      grade: '9B',
      students: 25,
      schedule: 'Martes, Jueves 14:00-15:00',
      nextClass: 'Mañana 14:00',
      status: 'active'
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Mis Clases</h1>
        <p className="text-gray-600">Gestión de clases asignadas y estudiantes</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {classes.map((classItem) => (
          <Card key={classItem.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-purple-600" />
                  {classItem.subject} - {classItem.grade}
                </CardTitle>
                <Badge variant={classItem.status === 'active' ? 'default' : 'secondary'}>
                  {classItem.status === 'active' ? 'Activa' : 'Inactiva'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>{classItem.students} estudiantes</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>Próxima: {classItem.nextClass}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>{classItem.schedule}</span>
              </div>

              <div className="flex gap-2 pt-4">
                <Button size="sm" className="flex-1">
                  <Eye className="h-4 w-4 mr-2" />
                  Ver Estudiantes
                </Button>
                <Button size="sm" variant="outline">
                  Gestionar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeacherClasses;
