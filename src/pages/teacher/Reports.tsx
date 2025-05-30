
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, Download, FileText, TrendingUp } from 'lucide-react';

const TeacherReports = () => {
  const reports = [
    {
      title: 'Reporte de Rendimiento',
      description: 'Análisis del rendimiento académico por curso',
      type: 'academic',
      lastGenerated: '2024-05-28'
    },
    {
      title: 'Reporte de Asistencia',
      description: 'Estadísticas de asistencia mensual',
      type: 'attendance',
      lastGenerated: '2024-05-27'
    },
    {
      title: 'Reporte de Comportamiento',
      description: 'Resumen de observaciones conductuales',
      type: 'behavior',
      lastGenerated: '2024-05-26'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Reportes</h1>
        <p className="text-gray-600">Visualizar reportes por curso y estudiantes</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-purple-600" />
                {report.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">{report.description}</p>
              <p className="text-xs text-gray-500">
                Último generado: {report.lastGenerated}
              </p>
              <div className="flex gap-2">
                <Button size="sm">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Ver Reporte
                </Button>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Exportar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeacherReports;
