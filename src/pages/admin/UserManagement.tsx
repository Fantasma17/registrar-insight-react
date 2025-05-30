
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Plus, Search, Edit, Trash2, UserPlus, Users } from 'lucide-react';

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');

  const users = [
    {
      id: 1,
      name: 'Ana García López',
      email: 'ana.garcia@estudiante.edu',
      role: 'Estudiante',
      status: 'Activo',
      lastLogin: '2024-01-15',
      createdAt: '2023-08-15'
    },
    {
      id: 2,
      name: 'Prof. María González',
      email: 'maria.gonzalez@escuela.edu',
      role: 'Profesor',
      status: 'Activo',
      lastLogin: '2024-01-16',
      createdAt: '2023-02-10'
    },
    {
      id: 3,
      name: 'Dr. Carlos Ruiz',
      email: 'carlos.ruiz@escuela.edu',
      role: 'Director',
      status: 'Activo',
      lastLogin: '2024-01-16',
      createdAt: '2022-01-05'
    },
    {
      id: 4,
      name: 'Luis Martín Pérez',
      email: 'luis.martin@estudiante.edu',
      role: 'Estudiante',
      status: 'Inactivo',
      lastLogin: '2024-01-10',
      createdAt: '2023-09-01'
    },
    {
      id: 5,
      name: 'Lic. Sandra López',
      email: 'sandra.lopez@escuela.edu',
      role: 'Administrador',
      status: 'Activo',
      lastLogin: '2024-01-16',
      createdAt: '2022-06-20'
    }
  ];

  const roleStats = [
    { role: 'Estudiantes', count: 1156, color: 'bg-blue-100 text-blue-800' },
    { role: 'Profesores', count: 78, color: 'bg-green-100 text-green-800' },
    { role: 'Directores', count: 5, color: 'bg-purple-100 text-purple-800' },
    { role: 'Administradores', count: 8, color: 'bg-red-100 text-red-800' }
  ];

  const getStatusColor = (status: string) => {
    return status === 'Activo' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800';
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Estudiante':
        return 'bg-blue-100 text-blue-800';
      case 'Profesor':
        return 'bg-green-100 text-green-800';
      case 'Director':
        return 'bg-purple-100 text-purple-800';
      case 'Administrador':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === 'all' || user.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestión de Usuarios</h1>
          <p className="text-gray-600">Crear, editar y eliminar usuarios del sistema</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <UserPlus className="h-4 w-4 mr-2" />
          Nuevo Usuario
        </Button>
      </div>

      {/* Estadísticas por rol */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {roleStats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.role}</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.count}</div>
              <Badge className={stat.color}>Usuarios activos</Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filtros y búsqueda */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Usuarios</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar por nombre o email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant={selectedRole === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedRole('all')}
                size="sm"
              >
                Todos
              </Button>
              <Button
                variant={selectedRole === 'Estudiante' ? 'default' : 'outline'}
                onClick={() => setSelectedRole('Estudiante')}
                size="sm"
              >
                Estudiantes
              </Button>
              <Button
                variant={selectedRole === 'Profesor' ? 'default' : 'outline'}
                onClick={() => setSelectedRole('Profesor')}
                size="sm"
              >
                Profesores
              </Button>
              <Button
                variant={selectedRole === 'Director' ? 'default' : 'outline'}
                onClick={() => setSelectedRole('Director')}
                size="sm"
              >
                Directores
              </Button>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Usuario</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Rol</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Último Acceso</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge className={getRoleColor(user.role)}>
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(user.status)}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{new Date(user.lastLogin).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-800">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
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

export default UserManagement;
