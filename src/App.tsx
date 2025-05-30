
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
import DynamicLayout from "./components/DynamicLayout";
import NotFound from "./pages/NotFound";

// Student pages
import StudentDashboard from "./pages/student/Dashboard";
import StudentProfile from "./pages/student/Profile";
import StudentGrades from "./pages/student/Grades";
import StudentTasks from "./pages/student/Tasks";
import StudentHistory from "./pages/student/History";
import StudentCommunication from "./pages/student/Communication";

// Admin pages
import AdminDashboard from "./pages/admin/Dashboard";
import UserManagement from "./pages/admin/UserManagement";

// Teacher pages
import TeacherDashboard from "./pages/teacher/Dashboard";
import TeacherClasses from "./pages/teacher/Classes";
import TeacherAttendance from "./pages/teacher/Attendance";
import TeacherGrades from "./pages/teacher/Grades";
import TeacherBehavior from "./pages/teacher/Behavior";
import TeacherMaterials from "./pages/teacher/Materials";
import TeacherReports from "./pages/teacher/Reports";
import TeacherProfile from "./pages/teacher/Profile";

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
              
              {/* Director routes */}
              <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
              <Route path="/matricula" element={<Layout><Matricula /></Layout>} />
              <Route path="/documentos" element={<Layout><Documentos /></Layout>} />
              <Route path="/expedientes" element={<Layout><Expedientes /></Layout>} />
              <Route path="/calendario" element={<Layout><Calendario /></Layout>} />
              <Route path="/reportes" element={<Layout><Reportes /></Layout>} />
              <Route path="/configuracion" element={<Layout><Configuracion /></Layout>} />
              
              {/* Student routes */}
              <Route path="/student/dashboard" element={<DynamicLayout userType="student"><StudentDashboard /></DynamicLayout>} />
              <Route path="/student/profile" element={<DynamicLayout userType="student"><StudentProfile /></DynamicLayout>} />
              <Route path="/student/grades" element={<DynamicLayout userType="student"><StudentGrades /></DynamicLayout>} />
              <Route path="/student/tasks" element={<DynamicLayout userType="student"><StudentTasks /></DynamicLayout>} />
              <Route path="/student/history" element={<DynamicLayout userType="student"><StudentHistory /></DynamicLayout>} />
              <Route path="/student/communication" element={<DynamicLayout userType="student"><StudentCommunication /></DynamicLayout>} />
              
              {/* Admin routes */}
              <Route path="/admin/dashboard" element={<DynamicLayout userType="admin"><AdminDashboard /></DynamicLayout>} />
              <Route path="/admin/users" element={<DynamicLayout userType="admin"><UserManagement /></DynamicLayout>} />
              
              {/* Teacher routes */}
              <Route path="/teacher/dashboard" element={<DynamicLayout userType="teacher"><TeacherDashboard /></DynamicLayout>} />
              <Route path="/teacher/classes" element={<DynamicLayout userType="teacher"><TeacherClasses /></DynamicLayout>} />
              <Route path="/teacher/attendance" element={<DynamicLayout userType="teacher"><TeacherAttendance /></DynamicLayout>} />
              <Route path="/teacher/grades" element={<DynamicLayout userType="teacher"><TeacherGrades /></DynamicLayout>} />
              <Route path="/teacher/behavior" element={<DynamicLayout userType="teacher"><TeacherBehavior /></DynamicLayout>} />
              <Route path="/teacher/materials" element={<DynamicLayout userType="teacher"><TeacherMaterials /></DynamicLayout>} />
              <Route path="/teacher/reports" element={<DynamicLayout userType="teacher"><TeacherReports /></DynamicLayout>} />
              <Route path="/teacher/profile" element={<DynamicLayout userType="teacher"><TeacherProfile /></DynamicLayout>} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
