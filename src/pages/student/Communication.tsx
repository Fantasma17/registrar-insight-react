
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mail, Send, MessageSquare, User, Clock } from 'lucide-react';

const StudentCommunication = () => {
  const [selectedTab, setSelectedTab] = useState('messages');
  const [newMessage, setNewMessage] = useState({
    to: '',
    subject: '',
    message: ''
  });

  const messages = [
    {
      id: 1,
      from: 'Prof. María González',
      subject: 'Tarea de Matemáticas',
      preview: 'Recuerda entregar los ejercicios del capítulo 5...',
      date: '2024-01-15',
      read: false
    },
    {
      id: 2,
      from: 'Administración',
      subject: 'Recordatorio: Reunión de Padres',
      preview: 'La reunión de padres será el próximo viernes...',
      date: '2024-01-14',
      read: true
    },
    {
      id: 3,
      from: 'Prof. Carlos Ruiz',
      subject: 'Felicitaciones por tu ensayo',
      preview: 'Excelente trabajo en el ensayo de historia...',
      date: '2024-01-12',
      read: true
    }
  ];

  const contacts = [
    {
      name: 'Prof. María González',
      subject: 'Matemáticas',
      role: 'Docente',
      available: true
    },
    {
      name: 'Prof. Carlos Ruiz',
      subject: 'Historia',
      role: 'Docente',
      available: true
    },
    {
      name: 'Lic. Ana Martín',
      subject: 'Administración',
      role: 'Coordinadora',
      available: false
    },
    {
      name: 'Dr. Luis Pérez',
      subject: 'Orientación',
      role: 'Psicólogo',
      available: true
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.to && newMessage.subject && newMessage.message) {
      // Aquí se enviaría el mensaje
      console.log('Enviando mensaje:', newMessage);
      setNewMessage({ to: '', subject: '', message: '' });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Comunicación</h1>
          <p className="text-gray-600">Contactar a docentes o administración</p>
        </div>
        <Badge className="bg-blue-100 text-blue-800">
          <Mail className="h-4 w-4 mr-1" />
          {messages.filter(m => !m.read).length} mensajes nuevos
        </Badge>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="messages">Mensajes</TabsTrigger>
          <TabsTrigger value="compose">Nuevo Mensaje</TabsTrigger>
          <TabsTrigger value="contacts">Contactos</TabsTrigger>
        </TabsList>

        <TabsContent value="messages" className="space-y-4">
          {messages.map((message) => (
            <Card key={message.id} className={`cursor-pointer transition-colors ${!message.read ? 'bg-blue-50 border-blue-200' : 'hover:bg-gray-50'}`}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <User className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">{message.from}</span>
                      {!message.read && (
                        <Badge className="bg-blue-500 text-white text-xs">Nuevo</Badge>
                      )}
                    </div>
                    <h3 className={`text-lg ${!message.read ? 'font-bold' : 'font-medium'}`}>
                      {message.subject}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">{message.preview}</p>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {new Date(message.date).toLocaleDateString()}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="compose" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Redactar Nuevo Mensaje</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Para:</label>
                <Input
                  placeholder="Seleccionar destinatario..."
                  value={newMessage.to}
                  onChange={(e) => setNewMessage({...newMessage, to: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Asunto:</label>
                <Input
                  placeholder="Asunto del mensaje"
                  value={newMessage.subject}
                  onChange={(e) => setNewMessage({...newMessage, subject: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Mensaje:</label>
                <Textarea
                  placeholder="Escribe tu mensaje aquí..."
                  rows={6}
                  value={newMessage.message}
                  onChange={(e) => setNewMessage({...newMessage, message: e.target.value})}
                />
              </div>
              
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setNewMessage({ to: '', subject: '', message: '' })}>
                  Borrador
                </Button>
                <Button onClick={handleSendMessage}>
                  <Send className="h-4 w-4 mr-1" />
                  Enviar
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contacts" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contacts.map((contact, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <User className="h-5 w-5 text-gray-500" />
                        <h3 className="font-medium">{contact.name}</h3>
                        <Badge className={contact.available ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                          {contact.available ? 'Disponible' : 'No disponible'}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{contact.subject}</p>
                      <p className="text-xs text-gray-500">{contact.role}</p>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline"
                      disabled={!contact.available}
                      onClick={() => {
                        setNewMessage({...newMessage, to: contact.name});
                        setSelectedTab('compose');
                      }}
                    >
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Mensaje
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudentCommunication;
