
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Lock, Bell, Settings, Upload } from 'lucide-react';

const Configuracion = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Configuración</h1>
          <p className="text-gray-600 mt-1">Gestiona tu perfil y preferencias del sistema</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Section */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Perfil Personal
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>
                    <User className="h-8 w-8" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4 mr-2" />
                    Cambiar Foto
                  </Button>
                  <p className="text-xs text-gray-600 mt-1">JPG, PNG máximo 2MB</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Nombre</Label>
                  <Input id="firstName" defaultValue="Director" />
                </div>
                <div>
                  <Label htmlFor="lastName">Apellido</Label>
                  <Input id="lastName" defaultValue="Principal" />
                </div>
                <div>
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input id="email" type="email" defaultValue="director@escuela.edu" />
                </div>
                <div>
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" defaultValue="+1 234 567 8900" />
                </div>
              </div>
              
              <Button className="bg-blue-600 hover:bg-blue-700">
                Actualizar Perfil
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Cambiar Contraseña
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="currentPassword">Contraseña Actual</Label>
                <Input id="currentPassword" type="password" />
              </div>
              <div>
                <Label htmlFor="newPassword">Nueva Contraseña</Label>
                <Input id="newPassword" type="password" />
              </div>
              <div>
                <Label htmlFor="confirmPassword">Confirmar Nueva Contraseña</Label>
                <Input id="confirmPassword" type="password" />
              </div>
              
              <Button variant="outline">
                Cambiar Contraseña
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Settings Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notificaciones
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Nuevas matrículas</span>
                <input type="checkbox" defaultChecked className="rounded" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Documentos pendientes</span>
                <input type="checkbox" defaultChecked className="rounded" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Eventos del calendario</span>
                <input type="checkbox" className="rounded" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Reportes semanales</span>
                <input type="checkbox" defaultChecked className="rounded" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Preferencias del Sistema
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="language">Idioma</Label>
                <select id="language" className="w-full p-2 border rounded">
                  <option>Español</option>
                  <option>English</option>
                </select>
              </div>
              <div>
                <Label htmlFor="timezone">Zona Horaria</Label>
                <select id="timezone" className="w-full p-2 border rounded">
                  <option>GMT-5 (Colombia)</option>
                  <option>GMT-6 (México)</option>
                </select>
              </div>
              <div>
                <Label htmlFor="dateFormat">Formato de Fecha</Label>
                <select id="dateFormat" className="w-full p-2 border rounded">
                  <option>DD/MM/YYYY</option>
                  <option>MM/DD/YYYY</option>
                </select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sesión Activa</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <p><strong>Último acceso:</strong> Hoy, 09:30 AM</p>
                <p><strong>Dispositivo:</strong> MacBook Pro</p>
                <p><strong>IP:</strong> 192.168.1.100</p>
              </div>
              <Button variant="destructive" size="sm" className="mt-4 w-full">
                Cerrar Sesión
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Configuracion;
