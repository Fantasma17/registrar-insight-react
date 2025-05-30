
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Plus, AlertTriangle, CheckCircle } from 'lucide-react';

const TeacherBehavior = () => {
  const behaviorNotes = [
    {
      id: 1,
      student: 'Ana García López',
      class: 'Matemáticas 8A',
      type: 'positive',
      note: 'Excelente participación en clase y ayuda a compañeros',
      date: '2024-05-28'
    },
    {
      id: 2,
      student: 'Carlos Mendoza',
      class: 'Álgebra 9A',
      type: 'negative',
      note: 'Interrumpe frecuentemente la clase',
      date: '2024-05-27'
    },
    {
      id: 3,
      student: 'Elena Rodríguez',
      class: 'Matemáticas 8B',
      type: 'positive',
      note: 'Muestra gran mejora en actitud y esfuerzo',
      date: '2024-05-26'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Comportamiento</h1>
          <p className="text-gray-600">Registrar observaciones y notas de comportamiento</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nueva Observación
        </Button>
      </div>

      <div className="space-y-4">
        {behaviorNotes.map((note) => (
          <Card key={note.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-full ${
                    note.type === 'positive' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    {note.type === 'positive' ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{note.student}</h3>
                    <p className="text-sm text-gray-600">{note.class}</p>
                    <p className="mt-2 text-gray-800">{note.note}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={note.type === 'positive' ? 'default' : 'destructive'}>
                    {note.type === 'positive' ? 'Positivo' : 'Negativo'}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    {note.date}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeacherBehavior;
