
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FolderOpen, Search, Plus, Eye, Edit } from 'lucide-react';

const Expedientes = () => {
  const expedientes = [
    { id: 'EXP-001', student: 'Ana García López', grade: '10°', status: 'Completo', lastUpdate: '2024-01-15' },
    { id: 'EXP-002', student: 'Carlos Rodríguez Pérez', grade: '11°', status: 'Incompleto', lastUpdate: '2024-01-14' },
    { id: 'EXP-003', student: 'María González Díaz', grade: '9°', status: 'Completo', lastUpdate: '2024-01-13' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Control de Expedientes</h1>
          <p className="text-gray-600 mt-1">Gestión y consulta de expedientes estudiantiles</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Expediente
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-2">
              <FolderOpen className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-2xl font-bold">1,156</p>
            <p className="text-sm text-gray-600">Total Expedientes</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-2xl font-bold text-green-600">1,089</p>
            <p className="text-sm text-gray-600">Completos</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-2xl font-bold text-orange-600">67</p>
            <p className="text-sm text-gray-600">Incompletos</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-2xl font-bold text-purple-600">94%</p>
            <p className="text-sm text-gray-600">Completitud</p>
          </CardContent>
        </Card>
      </div>

      {/* Expedientes List */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Expedientes Estudiantiles</CardTitle>
            <div className="relative">
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input placeholder="Buscar expediente..." className="pl-10 w-64" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">ID Expediente</th>
                  <th className="text-left py-3 px-4">Estudiante</th>
                  <th className="text-left py-3 px-4">Grado</th>
                  <th className="text-left py-3 px-4">Estado</th>
                  <th className="text-left py-3 px-4">Última Actualización</th>
                  <th className="text-left py-3 px-4">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {expedientes.map((exp) => (
                  <tr key={exp.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{exp.id}</td>
                    <td className="py-3 px-4">{exp.student}</td>
                    <td className="py-3 px-4">{exp.grade}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        exp.status === 'Completo' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        {exp.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">{exp.lastUpdate}</td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Expedientes;
