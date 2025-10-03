import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import OwnerDashboard from "./pages/OwnerDashboard";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import { DarkModeProvider } from "./context/DarkModeContext";
import { SidebarProvider } from "./context/SidebarContext";
import OwnerLayout from "./features/owner/OwnerLayout";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import Proposals from "./pages/Proposals";
import SubmittedProjects from "./pages/SubmittedProjects";
import FreelancerLayout from "./features/freelancer/FreelancerLayout";
import ProtectedRoute from "./ui/ProtectedRoute";
import AdminLayout from "./features/admin/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import Users from "./pages/Users";
import HomePage from "./features/home/HomePage";
import AvailableProjects from "./features/home/AvailableProjects";
import ContactUs from "./features/home/ContactUs";
import StartPath from "./features/home/StartPath";
import Categories from "./pages/Categories";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        <SidebarProvider>
          <Toaster />

          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/complete-profile" element={<CompleteProfile />} />
            {/* OWNER Route */}
            <Route
              path="/owner"
              element={
                <ProtectedRoute>
                  <OwnerLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<OwnerDashboard />} />
              <Route path="projects" element={<Projects />} />
              <Route path="project/:id" element={<Project />} />
            </Route>
            {/* FREELANCER Route */}
            <Route
              path="/freelancer"
              element={
                <ProtectedRoute>
                  <FreelancerLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<FreelancerDashboard />} />
              <Route path="proposals" element={<Proposals />} />
              <Route path="projects" element={<SubmittedProjects />} />
            </Route>
            {/* ADMIN Route */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="users" element={<Users />} />
              <Route path="proposals" element={<Proposals />} />
              <Route path="projects" element={<SubmittedProjects />} />
              <Route path="categories" element={<Categories />} />
            </Route>

            {/* Home Route */}
            <Route path="/" element={<Home />}>
              <Route index element={<HomePage />} />
              <Route path="contact-us" element={<ContactUs />} />
              <Route path="projects" element={<AvailableProjects />} />
              <Route path="start-path" element={<StartPath />} />
            </Route>
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </SidebarProvider>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
