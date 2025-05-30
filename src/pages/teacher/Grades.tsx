
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Edit, Plus, BookOpen } from 'lucide-react';

const TeacherGrades = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Calificaciones</h1>
          <p className="text-gray-600">Registrar y gestionar calificaciones de estudiantes</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nueva Evaluación
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-purple-600" />
              Matemáticas 8A
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">26 estudiantes</p>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Examen Parcial 1</span>
                <Badge>Completado</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Tarea Unidad 2</span>
                <Badge variant="secondary">Pendiente</Badge>
              </div>
            </div>
            <Button size="sm" className="w-full mt-4">
              <Edit className="h-4 w-4 mr-2" />
              Gestionar Calificaciones
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-purple-600" />
              Álgebra 9A
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">28 estudiantes</p>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Quiz Semanal</span>
                <Badge>Completado</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Proyecto Final</span>
                <Badge variant="secondary">En Progreso</Badge>
              </div>
            </div>
            <Button size="sm" className="w-full mt-4">
              <Edit className="h-4 w-4 mr-2" />
              Gestionar Calificaciones
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeacherGrades;
