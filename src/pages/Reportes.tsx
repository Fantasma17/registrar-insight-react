
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, Download, FileText, Users, Calendar } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Reportes = () => {
  const matriculaData = [
    { mes: 'Ene', cantidad: 120 },
    { mes: 'Feb', cantidad: 135 },
    { mes: 'Mar', cantidad: 95 },
    { mes: 'Abr', cantidad: 180 },
    { mes: 'May', cantidad: 160 },
    { mes: 'Jun', cantidad: 200 },
  ];

  const documentosData = [
    { name: 'Constancias', value: 45, color: '#3B82F6' },
    { name: 'Certificados', value: 30, color: '#10B981' },
    { name: 'Títulos', value: 25, color: '#F59E0B' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reportes Administrativos</h1>
          <p className="text-gray-600 mt-1">Análisis de matrículas, documentos y asistencia</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Download className="h-4 w-4 mr-2" />
          Exportar Reportes
        </Button>
      </div>

      {/* Report Types */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Reporte de Matrículas</h3>
            <p className="text-gray-600 text-sm mb-4">Estadísticas de inscripciones</p>
            <Button variant="outline" className="w-full">Generar</Button>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
              <FileText className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Documentos Emitidos</h3>
            <p className="text-gray-600 text-sm mb-4">Análisis de documentación</p>
            <Button variant="outline" className="w-full">Generar</Button>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-4">
              <Calendar className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Asistencia General</h3>
            <p className="text-gray-600 text-sm mb-4">Control de asistencias</p>
            <Button variant="outline" className="w-full">Generar</Button>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Matrículas por Mes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={matriculaData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="cantidad" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Distribución de Documentos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={documentosData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {documentosData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-2xl font-bold text-blue-600">1,247</p>
            <p className="text-sm text-gray-600">Total Estudiantes</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-2xl font-bold text-green-600">342</p>
            <p className="text-sm text-gray-600">Documentos Este Mes</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-2xl font-bold text-purple-600">94.5%</p>
            <p className="text-sm text-gray-600">Asistencia Promedio</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-2xl font-bold text-orange-600">156</p>
            <p className="text-sm text-gray-600">Nuevas Matrículas</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reportes;
