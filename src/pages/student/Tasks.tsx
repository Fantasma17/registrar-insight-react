
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Calendar, Download, Clock, CheckCircle } from 'lucide-react';

const StudentTasks = () => {
  const [selectedTab, setSelectedTab] = useState('pending');

  const pendingTasks = [
    {
      id: 1,
      title: 'Ecuaciones Lineales - Ejercicios',
      subject: 'Matemáticas',
      dueDate: '2024-01-20',
      priority: 'alta',
      description: 'Resolver ejercicios del capítulo 5, páginas 120-125'
    },
    {
      id: 2,
      title: 'Ensayo sobre la Revolución',
      subject: 'Historia',
      dueDate: '2024-01-25',
      priority: 'media',
      description: 'Ensayo de 500 palabras sobre las causas de la Revolución'
    },
    {
      id: 3,
      title: 'Laboratorio de Química',
      subject: 'Ciencias',
      dueDate: '2024-01-18',
      priority: 'alta',
      description: 'Reporte del experimento de ácidos y bases'
    }
  ];

  const materials = [
    {
      id: 1,
      title: 'Libro de Matemáticas - Cap. 5',
      subject: 'Matemáticas',
      type: 'PDF',
      size: '2.5 MB'
    },
    {
      id: 2,
      title: 'Presentación: Segunda Guerra Mundial',
      subject: 'Historia',
      type: 'PPTX',
      size: '15.2 MB'
    },
    {
      id: 3,
      title: 'Tabla Periódica Interactiva',
      subject: 'Ciencias',
      type: 'Link',
      size: 'Online'
    },
    {
      id: 4,
      title: 'Ejercicios de Gramática',
      subject: 'Literatura',
      type: 'PDF',
      size: '1.8 MB'
    }
  ];

  const completedTasks = [
    {
      id: 4,
      title: 'Análisis de Romeo y Julieta',
      subject: 'Literatura',
      completedDate: '2024-01-15',
      grade: 9.2
    },
    {
      id: 5,
      title: 'Problemas de Geometría',
      subject: 'Matemáticas',
      completedDate: '2024-01-12',
      grade: 8.8
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'alta':
        return 'bg-red-100 text-red-800';
      case 'media':
        return 'bg-yellow-100 text-yellow-800';
      case 'baja':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getDaysUntilDue = (dueDate: string) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tareas y Material</h1>
          <p className="text-gray-600">Acceder a tareas asignadas y material didáctico</p>
        </div>
        <Badge className="bg-blue-100 text-blue-800">
          {pendingTasks.length} tareas pendientes
        </Badge>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pending">Tareas Pendientes</TabsTrigger>
          <TabsTrigger value="materials">Material Didáctico</TabsTrigger>
          <TabsTrigger value="completed">Completadas</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          {pendingTasks.map((task) => (
            <Card key={task.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{task.title}</CardTitle>
                    <p className="text-sm text-gray-600">{task.subject}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={getPriorityColor(task.priority)}>
                      {task.priority}
                    </Badge>
                    <Badge variant="outline">
                      <Calendar className="h-3 w-3 mr-1" />
                      {getDaysUntilDue(task.dueDate)} días
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{task.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    Entrega: {new Date(task.dueDate).toLocaleDateString()}
                  </div>
                  <Button size="sm">
                    Entregar Tarea
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="materials" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {materials.map((material) => (
              <Card key={material.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{material.title}</CardTitle>
                      <p className="text-sm text-gray-600">{material.subject}</p>
                    </div>
                    <Badge variant="outline">{material.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-600">
                      <BookOpen className="h-4 w-4 mr-1" />
                      {material.size}
                    </div>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-1" />
                      Descargar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {completedTasks.map((task) => (
            <Card key={task.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{task.title}</CardTitle>
                    <p className="text-sm text-gray-600">{task.subject}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-green-100 text-green-800">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Completada
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800">
                      Calificación: {task.grade}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-1" />
                  Entregada: {new Date(task.completedDate).toLocaleDateString()}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudentTasks;
