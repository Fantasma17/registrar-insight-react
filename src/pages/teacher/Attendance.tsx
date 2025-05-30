
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ClipboardCheck, Calendar, Users, Check, X, Clock } from 'lucide-react';

const TeacherAttendance = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const classes = [
    { id: '8a-math', name: 'Matemáticas 8A' },
    { id: '8b-math', name: 'Matemáticas 8B' },
    { id: '9a-algebra', name: 'Álgebra 9A' },
    { id: '9b-algebra', name: 'Álgebra 9B' },
  ];

  const students = [
    { id: 1, name: 'Ana García López', present: true },
    { id: 2, name: 'Carlos Mendoza', present: true },
    { id: 3, name: 'Elena Rodríguez', present: false },
    { id: 4, name: 'Fernando Silva', present: true },
    { id: 5, name: 'Isabel Torres', present: true },
    { id: 6, name: 'Javier Morales', present: false },
    { id: 7, name: 'Laura Jiménez', present: true },
    { id: 8, name: 'Miguel Santos', present: true },
  ];

  const toggleAttendance = (studentId: number) => {
    // En una aplicación real, aquí actualizarías el estado
    console.log(`Toggle attendance for student ${studentId}`);
  };

  const presentCount = students.filter(s => s.present).length;
  const absentCount = students.length - presentCount;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Control de Asistencia</h1>
        <p className="text-gray-600">Registrar y gestionar asistencia de estudiantes</p>
      </div>

      {/* Filtros */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ClipboardCheck className="h-5 w-5" />
            Seleccionar Clase y Fecha
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Clase</label>
              <Select value={selectedClass} onValueChange={setSelectedClass}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar clase" />
                </SelectTrigger>
                <SelectContent>
                  {classes.map((class_) => (
                    <SelectItem key={class_.id} value={class_.id}>
                      {class_.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Fecha</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <Button>
              <Calendar className="h-4 w-4 mr-2" />
              Cargar Asistencia
            </Button>
          </div>
        </CardContent>
      </Card>

      {selectedClass && (
        <>
          {/* Resumen */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Estudiantes</p>
                    <p className="text-3xl font-bold text-gray-900">{students.length}</p>
                  </div>
                  <Users className="h-8 w-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Presentes</p>
                    <p className="text-3xl font-bold text-green-600">{presentCount}</p>
                  </div>
                  <Check className="h-8 w-8 text-green-500" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Ausentes</p>
                    <p className="text-3xl font-bold text-red-600">{absentCount}</p>
                  </div>
                  <X className="h-8 w-8 text-red-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Lista de Estudiantes */}
          <Card>
            <CardHeader>
              <CardTitle>Lista de Estudiantes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {students.map((student) => (
                  <div
                    key={student.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-medium">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="font-medium text-gray-900">{student.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={student.present ? 'default' : 'destructive'}>
                        {student.present ? 'Presente' : 'Ausente'}
                      </Badge>
                      <Button
                        size="sm"
                        variant={student.present ? 'destructive' : 'default'}
                        onClick={() => toggleAttendance(student.id)}
                      >
                        {student.present ? (
                          <>
                            <X className="h-4 w-4 mr-1" />
                            Marcar Ausente
                          </>
                        ) : (
                          <>
                            <Check className="h-4 w-4 mr-1" />
                            Marcar Presente
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-end">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Clock className="h-4 w-4 mr-2" />
                  Guardar Asistencia
                </Button>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default TeacherAttendance;
