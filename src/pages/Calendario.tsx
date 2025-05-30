
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Plus, Bell, Clock } from 'lucide-react';

const CalendarioEscolar = () => {
  const eventos = [
    { title: 'Inicio de Clases', date: '2024-02-05', type: 'Académico' },
    { title: 'Reunión de Padres', date: '2024-02-15', type: 'Institucional' },
    { title: 'Exámenes Parciales', date: '2024-03-01', type: 'Evaluación' },
    { title: 'Vacaciones de Semana Santa', date: '2024-03-25', type: 'Vacaciones' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Calendario Escolar</h1>
          <p className="text-gray-600 mt-1">Visualizar y gestionar calendario académico</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Evento
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar View */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Febrero 2024
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Simple calendar representation */}
              <div className="grid grid-cols-7 gap-2 text-center">
                {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((day) => (
                  <div key={day} className="p-2 font-semibold text-gray-600 text-sm">
                    {day}
                  </div>
                ))}
                {Array.from({ length: 35 }, (_, i) => {
                  const day = i - 3; // Adjust for starting day
                  const isCurrentMonth = day > 0 && day <= 29;
                  const hasEvent = [5, 15].includes(day);
                  
                  return (
                    <div
                      key={i}
                      className={`p-2 text-sm cursor-pointer rounded ${
                        isCurrentMonth
                          ? hasEvent
                            ? 'bg-blue-100 text-blue-800 font-semibold'
                            : 'hover:bg-gray-100'
                          : 'text-gray-300'
                      }`}
                    >
                      {isCurrentMonth ? day : ''}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Events Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Próximos Eventos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {eventos.map((evento, index) => (
                <div key={index} className="p-3 border rounded-lg">
                  <h4 className="font-medium text-sm">{evento.title}</h4>
                  <p className="text-xs text-gray-600">{evento.date}</p>
                  <span className="inline-block mt-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                    {evento.type}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Recordatorios
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm font-medium">Entrega de notas</p>
                <p className="text-xs text-gray-600">Fecha límite: 20 Feb</p>
              </div>
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm font-medium">Renovación de licencias</p>
                <p className="text-xs text-gray-600">Vence: 25 Feb</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CalendarioEscolar;
