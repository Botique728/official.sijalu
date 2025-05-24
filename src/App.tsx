import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import TeamPage from "./pages/TeamPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import ProfileSection from "./components/dashboard/ProfileSection";
import StatsSection from "./components/dashboard/StatsSection";
import JaluCourseSection from "./components/dashboard/JaluCourseSection";
import JaluMentoringSection from "./components/dashboard/JaluMentoringSection";
import JaluRequestSection from "./components/dashboard/JaluRequestSection";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import JaluRequestOpenPage from "./pages/JaluRequestOpenPage";
import JaluRequestDirectPage from "./pages/JaluRequestDirectPage";

const queryClient = new QueryClient();

const App = () =>
<QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            
            {/* Protected Dashboard Routes */}
            <Route path="/dashboard" element={
          <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
          }>
              <Route index element={<ProfileSection />} />
              <Route path="stats" element={<StatsSection />} />
              <Route path="jalucourse" element={<JaluCourseSection />} />
              <Route path="jalumentoring" element={<JaluMentoringSection />} />
              <Route path="jalurequest" element={<JaluRequestSection />} />
            </Route>
            
            <Route path="/jalu-request-open" element={
          <ProtectedRoute>
                <JaluRequestOpenPage />
              </ProtectedRoute>
          } />
            
            <Route path="/jalu-request-direct" element={
          <ProtectedRoute>
                <JaluRequestDirectPage />
              </ProtectedRoute>
          } />
            
            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>;


export default App;