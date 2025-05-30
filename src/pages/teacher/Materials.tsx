
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Plus, Download, Eye } from 'lucide-react';

const TeacherMaterials = () => {
  const materials = [
    {
      id: 1,
      title: 'Guía de Álgebra Lineal',
      type: 'PDF',
      class: 'Álgebra 9A',
      uploaded: '2024-05-25',
      downloads: 23
    },
    {
      id: 2,
      title: 'Ejercicios de Geometría',
      type: 'DOC',
      class: 'Matemáticas 8A',
      uploaded: '2024-05-24',
      downloads: 18
    },
    {
      id: 3,
      title: 'Tarea: Ecuaciones Cuadráticas',
      type: 'PDF',
      class: 'Álgebra 9B',
      uploaded: '2024-05-23',
      downloads: 31
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Material Didáctico</h1>
          <p className="text-gray-600">Gestionar notas, tareas y material de clase</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Subir Material
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {materials.map((material) => (
          <Card key={material.id}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-purple-600" />
                {material.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <Badge variant="secondary">{material.type}</Badge>
                <span className="text-sm text-gray-600">{material.class}</span>
              </div>
              <div className="text-sm text-gray-600">
                <p>Subido: {material.uploaded}</p>
                <p>Descargas: {material.downloads}</p>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Eye className="h-4 w-4 mr-1" />
                  Ver
                </Button>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-1" />
                  Descargar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeacherMaterials;
