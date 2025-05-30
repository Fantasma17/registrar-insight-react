
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Award, CheckCircle, Search } from 'lucide-react';

const Documentos = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Documentos Oficiales</h1>
          <p className="text-gray-600 mt-1">Gestión de constancias, certificados y validaciones</p>
        </div>
      </div>

      {/* Document Types */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Emitir Constancias</h3>
            <p className="text-gray-600 text-sm mb-4">Generar constancias de estudio y notas</p>
            <Button className="w-full">Crear Constancia</Button>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
              <Award className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Emitir Certificados</h3>
            <p className="text-gray-600 text-sm mb-4">Certificados de graduación y logros</p>
            <Button className="w-full">Crear Certificado</Button>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardContent className="p-6 text-center">
            <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Validar Documentos</h3>
            <p className="text-gray-600 text-sm mb-4">Verificar autenticidad de documentos</p>
            <Button className="w-full">Validar Documento</Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Documents */}
      <Card>
        <CardHeader>
          <CardTitle>Documentos Recientes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">Constancia de Notas - Ana García</p>
                  <p className="text-sm text-gray-600">Emitida el 15 de enero, 2024</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Ver</Button>
            </div>
            
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded">
                  <Award className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">Certificado de Graduación - Carlos Rodríguez</p>
                  <p className="text-sm text-gray-600">Emitido el 14 de enero, 2024</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Ver</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Documentos;
