
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Mail, Phone, Calendar, MapPin } from 'lucide-react';

const StudentProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Ana García López',
    email: 'ana.garcia@estudiante.edu',
    phone: '+52 555 123 4567',
    birthDate: '2005-03-15',
    address: 'Calle Principal 123, Ciudad, Estado'
  });

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Aquí se guardarían los cambios
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Mi Perfil</h1>
          <p className="text-gray-600">Ver y actualizar información personal</p>
        </div>
        <Button onClick={isEditing ? handleSave : handleEdit}>
          {isEditing ? 'Guardar' : 'Editar'}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Información básica */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Información Personal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre Completo</Label>
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-gray-500" />
                  <Input
                    id="name"
                    value={profileData.name}
                    disabled={!isEditing}
                    onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    disabled={!isEditing}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <Input
                    id="phone"
                    value={profileData.phone}
                    disabled={!isEditing}
                    onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthDate">Fecha de Nacimiento</Label>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <Input
                    id="birthDate"
                    type="date"
                    value={profileData.birthDate}
                    disabled={!isEditing}
                    onChange={(e) => setProfileData({...profileData, birthDate: e.target.value})}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Dirección</Label>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                <Input
                  id="address"
                  value={profileData.address}
                  disabled={!isEditing}
                  onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Foto de perfil y datos académicos */}
        <Card>
          <CardHeader>
            <CardTitle>Foto de Perfil</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>
                  <User className="h-12 w-12" />
                </AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm">
                Cambiar Foto
              </Button>
            </div>

            <div className="space-y-3 pt-4 border-t">
              <h4 className="font-medium">Información Académica</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Grado:</span>
                  <span>3° Secundaria</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Grupo:</span>
                  <span>A</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">No. Estudiante:</span>
                  <span>2024001</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Año Escolar:</span>
                  <span>2024-2025</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentProfile;
