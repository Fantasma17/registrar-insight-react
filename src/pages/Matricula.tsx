
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { UserPlus, Search, Filter, Edit, Eye } from 'lucide-react';

const Matricula = () => {
  const students = [
    { id: '001', name: 'Ana García López', grade: '10°', status: 'Activo', date: '2024-01-15' },
    { id: '002', name: 'Carlos Rodríguez Pérez', grade: '11°', status: 'Activo', date: '2024-01-16' },
    { id: '003', name: 'María González Díaz', grade: '9°', status: 'Pendiente', date: '2024-01-17' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestión de Matrícula</h1>
          <p className="text-gray-600 mt-1">Administra las matrículas de estudiantes</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <UserPlus className="h-4 w-4 mr-2" />
          Nueva Matrícula
        </Button>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
              <UserPlus className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Registrar Nueva Matrícula</h3>
            <p className="text-gray-600 text-sm">Agregar nuevo estudiante al sistema</p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
              <Edit className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Actualizar Datos</h3>
            <p className="text-gray-600 text-sm">Modificar información de estudiantes</p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-4">
              <Eye className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Consultar Matrícula</h3>
            <p className="text-gray-600 text-sm">Ver detalles de estudiantes registrados</p>
          </CardContent>
        </Card>
      </div>

      {/* Students List */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Estudiantes Matriculados</CardTitle>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input placeholder="Buscar estudiante..." className="pl-10 w-64" />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filtros
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">ID</th>
                  <th className="text-left py-3 px-4">Nombre Completo</th>
                  <th className="text-left py-3 px-4">Grado</th>
                  <th className="text-left py-3 px-4">Estado</th>
                  <th className="text-left py-3 px-4">Fecha Matrícula</th>
                  <th className="text-left py-3 px-4">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{student.id}</td>
                    <td className="py-3 px-4">{student.name}</td>
                    <td className="py-3 px-4">{student.grade}</td>
                    <td className="py-3 px-4">
                      <Badge variant={student.status === 'Activo' ? 'default' : 'secondary'}>
                        {student.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">{student.date}</td>
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

export default Matricula;
