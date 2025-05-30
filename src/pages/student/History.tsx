
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
import { TrendingUp, Award, Calendar } from 'lucide-react';

const StudentHistory = () => {
  const academicHistory = [
    {
      period: '2024-1',
      subject: 'Matemáticas',
      grade: 8.8,
      behavior: 'Excelente',
      observations: 'Estudiante aplicado, muestra gran interés en la materia'
    },
    {
      period: '2024-1',
      subject: 'Historia',
      grade: 9.0,
      behavior: 'Muy Bueno',
      observations: 'Participación activa en clase'
    },
    {
      period: '2024-1',
      subject: 'Ciencias',
      grade: 8.2,
      behavior: 'Bueno',
      observations: 'Necesita reforzar conceptos básicos'
    },
    {
      period: '2023-2',
      subject: 'Matemáticas',
      grade: 8.5,
      behavior: 'Muy Bueno',
      observations: 'Progreso constante durante el período'
    },
    {
      period: '2023-2',
      subject: 'Historia',
      grade: 8.7,
      behavior: 'Excelente',
      observations: 'Excelente trabajo en proyectos'
    }
  ];

  const achievements = [
    {
      title: 'Estudiante del Mes',
      date: '2024-01',
      description: 'Reconocimiento por excelencia académica'
    },
    {
      title: 'Mejor Ensayo de Historia',
      date: '2023-12',
      description: 'Primer lugar en concurso de ensayos'
    },
    {
      title: 'Participación Destacada',
      date: '2023-11',
      description: 'Proyecto de ciencias sobresaliente'
    }
  ];

  const getGradeColor = (grade: number) => {
    if (grade >= 9) return 'text-green-600';
    if (grade >= 8) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getBehaviorColor = (behavior: string) => {
    switch (behavior) {
      case 'Excelente':
        return 'bg-green-100 text-green-800';
      case 'Muy Bueno':
        return 'bg-blue-100 text-blue-800';
      case 'Bueno':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const overallAverage = academicHistory.reduce((sum, record) => sum + record.grade, 0) / academicHistory.length;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Historial Académico</h1>
          <p className="text-gray-600">Ver el historial de calificaciones y comportamiento</p>
        </div>
        <Badge className="bg-blue-100 text-blue-800">
          <TrendingUp className="h-4 w-4 mr-1" />
          Promedio Histórico: {overallAverage.toFixed(1)}
        </Badge>
      </div>

      {/* Resumen estadístico */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Promedio General</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-3xl font-bold ${getGradeColor(overallAverage)}`}>
              {overallAverage.toFixed(1)}
            </div>
            <p className="text-sm text-gray-600">de {academicHistory.length} registros</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Reconocimientos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-600">
              {achievements.length}
            </div>
            <p className="text-sm text-gray-600">logros obtenidos</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Comportamiento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              Excelente
            </div>
            <p className="text-sm text-gray-600">promedio general</p>
          </CardContent>
        </Card>
      </div>

      {/* Historial académico */}
      <Card>
        <CardHeader>
          <CardTitle>Historial de Calificaciones</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Período</TableHead>
                <TableHead>Materia</TableHead>
                <TableHead className="text-center">Calificación</TableHead>
                <TableHead className="text-center">Comportamiento</TableHead>
                <TableHead>Observaciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {academicHistory.map((record, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{record.period}</TableCell>
                  <TableCell>{record.subject}</TableCell>
                  <TableCell className={`text-center font-bold ${getGradeColor(record.grade)}`}>
                    {record.grade}
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge className={getBehaviorColor(record.behavior)}>
                      {record.behavior}
                    </Badge>
                  </TableCell>
                  <TableCell className="max-w-xs">
                    <p className="text-sm text-gray-600 truncate">{record.observations}</p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Reconocimientos */}
      <Card>
        <CardHeader>
          <CardTitle>Reconocimientos y Logros</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg">
                <Award className="h-6 w-6 text-yellow-600 mt-1" />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                  <div className="flex items-center mt-2 text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    {achievement.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentHistory;
