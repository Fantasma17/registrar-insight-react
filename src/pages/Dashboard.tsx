
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  FileText, 
  Calendar, 
  TrendingUp, 
  AlertTriangle, 
  Clock,
  CheckCircle,
  BookOpen
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';

const Dashboard = () => {
  const salesData = [
    { name: 'Ene', value: 850 },
    { name: 'Feb', value: 920 },
    { name: 'Mar', value: 780 },
    { name: 'Abr', value: 1100 },
    { name: 'May', value: 1250 },
    { name: 'Jun', value: 1150 },
    { name: 'Jul', value: 1350 },
  ];

  const goalData = [
    { name: 'Agregar Productos', value: 160, total: 200 },
    { name: 'Completar Compra', value: 310, total: 400 },
    { name: 'Visitar Página Premium', value: 480, total: 800 },
    { name: 'Enviar Consultas', value: 250, total: 500 },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Versión 2.0</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>Inicio</span>
          <span>/</span>
          <span className="font-medium">Dashboard</span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-cyan-100 text-sm">Matrícula Activa</p>
                <p className="text-3xl font-bold">1,247</p>
                <p className="text-cyan-100 text-sm mt-1">+12% este mes</p>
              </div>
              <div className="bg-white/20 p-3 rounded-lg">
                <Users className="h-8 w-8" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-red-500 to-pink-500 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-100 text-sm">Documentos Emitidos</p>
                <p className="text-3xl font-bold">8,342</p>
                <p className="text-red-100 text-sm mt-1">+24% este mes</p>
              </div>
              <div className="bg-white/20 p-3 rounded-lg">
                <FileText className="h-8 w-8" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm">Expedientes</p>
                <p className="text-3xl font-bold">1,156</p>
                <p className="text-green-100 text-sm mt-1">Activos</p>
              </div>
              <div className="bg-white/20 p-3 rounded-lg">
                <BookOpen className="h-8 w-8" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm">Eventos Programados</p>
                <p className="text-3xl font-bold">47</p>
                <p className="text-orange-100 text-sm mt-1">Este mes</p>
              </div>
              <div className="bg-white/20 p-3 rounded-lg">
                <Calendar className="h-8 w-8" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Report Chart */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Reporte Mensual de Matrículas</CardTitle>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">−</Button>
                <Button variant="ghost" size="sm">⤢</Button>
                <Button variant="ghost" size="sm">×</Button>
              </div>
            </div>
            <p className="text-sm text-gray-600">Matrículas: 1 Ene, 2024 - 30 Jul, 2024</p>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="value" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">↗ 17%</p>
                <p className="text-sm text-gray-600">TOTAL MATRÍCULAS</p>
                <p className="text-lg font-semibold">$35,210.43</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-orange-600">↗ 10%</p>
                <p className="text-sm text-gray-600">TOTAL GASTOS</p>
                <p className="text-lg font-semibold">$10,390.90</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">↗ 20%</p>
                <p className="text-sm text-gray-600">PRESUPUESTO</p>
                <p className="text-lg font-semibold">$24,813.53</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Goal Completion */}
        <Card>
          <CardHeader>
            <CardTitle>Cumplimiento de Metas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {goalData.map((goal, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{goal.name}</span>
                  <span className="text-sm text-gray-600">{goal.value}/{goal.total}</span>
                </div>
                <Progress value={(goal.value / goal.total) * 100} className="h-3" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              Alertas Importantes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
              <Clock className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Vencimiento de documentos</p>
                <p className="text-xs text-gray-600">15 certificados por renovar</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Matrículas pendientes</p>
                <p className="text-xs text-gray-600">23 solicitudes por revisar</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <Calendar className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Reunión de profesores</p>
                <p className="text-xs text-gray-600">Mañana a las 9:00 AM</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Actividades Recientes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <CheckCircle className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Nueva matrícula procesada</p>
                <p className="text-xs text-gray-600">Hace 2 horas</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <FileText className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Certificado emitido</p>
                <p className="text-xs text-gray-600">Hace 4 horas</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-2 rounded-full">
                <Calendar className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Evento programado</p>
                <p className="text-xs text-gray-600">Hace 6 horas</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card className="bg-gradient-to-br from-orange-400 to-orange-600 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="bg-white/20 p-2 rounded-lg">
                <TrendingUp className="h-6 w-6" />
              </div>
              Inventario de Documentos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-3xl font-bold">5,200</p>
                <p className="text-orange-100 text-sm">Documentos en stock</p>
                <p className="text-orange-100 text-xs">50% incremento en 30 días</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm">Certificados</span>
                  <span className="text-sm">75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
