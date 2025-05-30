
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Matricula from "./pages/Matricula";
import Documentos from "./pages/Documentos";
import Expedientes from "./pages/Expedientes";
import Calendario from "./pages/Calendario";
import Reportes from "./pages/Reportes";
import Configuracion from "./pages/Configuracion";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
              <Route path="/matricula" element={<Layout><Matricula /></Layout>} />
              <Route path="/documentos" element={<Layout><Documentos /></Layout>} />
              <Route path="/expedientes" element={<Layout><Expedientes /></Layout>} />
              <Route path="/calendario" element={<Layout><Calendario /></Layout>} />
              <Route path="/reportes" element={<Layout><Reportes /></Layout>} />
              <Route path="/configuracion" element={<Layout><Configuracion /></Layout>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
