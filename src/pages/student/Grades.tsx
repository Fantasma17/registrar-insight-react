
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const StudentGrades = () => {
  const subjects = [
    {
      name: 'Matemáticas',
      partial1: 8.5,
      partial2: 9.2,
      partial3: 8.8,
      final: 8.8,
      trend: 'up'
    },
    {
      name: 'Historia',
      partial1: 9.0,
      partial2: 8.7,
      partial3: 9.2,
      final: 8.9,
      trend: 'up'
    },
    {
      name: 'Ciencias',
      partial1: 8.2,
      partial2: 8.0,
      partial3: 8.5,
      final: 8.2,
      trend: 'stable'
    },
    {
      name: 'Literatura',
      partial1: 9.5,
      partial2: 8.8,
      partial3: 9.0,
      final: 9.1,
      trend: 'down'
    },
    {
      name: 'Inglés',
      partial1: 8.8,
      partial2: 9.1,
      partial3: 9.3,
      final: 9.1,
      trend: 'up'
    },
    {
      name: 'Educación Física',
      partial1: 9.8,
      partial2: 9.5,
      partial3: 9.7,
      final: 9.7,
      trend: 'stable'
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'down':
        return <TrendingDown className="h-4 w-4 text-red-600" />;
      default:
        return <Minus className="h-4 w-4 text-gray-600" />;
    }
  };

  const getGradeColor = (grade: number) => {
    if (grade >= 9) return 'text-green-600';
    if (grade >= 8) return 'text-yellow-600';
    return 'text-red-600';
  };

  const overallAverage = subjects.reduce((sum, subject) => sum + subject.final, 0) / subjects.length;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Mis Calificaciones</h1>
          <p className="text-gray-600">Consultar calificaciones por materia</p>
        </div>
        <Badge className={`${overallAverage >= 9 ? 'bg-green-100 text-green-800' : overallAverage >= 8 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
          Promedio General: {overallAverage.toFixed(1)}
        </Badge>
      </div>

      {/* Resumen rápido */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Promedio General</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-3xl font-bold ${getGradeColor(overallAverage)}`}>
              {overallAverage.toFixed(1)}
            </div>
            <p className="text-sm text-gray-600">de 6 materias</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Mejor Materia</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              Educación Física
            </div>
            <p className="text-sm text-gray-600">9.7 promedio</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">A Mejorar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">
              Ciencias
            </div>
            <p className="text-sm text-gray-600">8.2 promedio</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabla de calificaciones */}
      <Card>
        <CardHeader>
          <CardTitle>Calificaciones por Materia</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Materia</TableHead>
                <TableHead className="text-center">1er Parcial</TableHead>
                <TableHead className="text-center">2do Parcial</TableHead>
                <TableHead className="text-center">3er Parcial</TableHead>
                <TableHead className="text-center">Promedio Final</TableHead>
                <TableHead className="text-center">Tendencia</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subjects.map((subject) => (
                <TableRow key={subject.name}>
                  <TableCell className="font-medium">{subject.name}</TableCell>
                  <TableCell className={`text-center ${getGradeColor(subject.partial1)}`}>
                    {subject.partial1}
                  </TableCell>
                  <TableCell className={`text-center ${getGradeColor(subject.partial2)}`}>
                    {subject.partial2}
                  </TableCell>
                  <TableCell className={`text-center ${getGradeColor(subject.partial3)}`}>
                    {subject.partial3}
                  </TableCell>
                  <TableCell className={`text-center font-bold ${getGradeColor(subject.final)}`}>
                    {subject.final}
                  </TableCell>
                  <TableCell className="text-center">
                    {getTrendIcon(subject.trend)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentGrades;
