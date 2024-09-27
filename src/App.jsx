import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import Index from "./pages/Index";
import QRCodeGenerator from "./pages/TodoList";
import UserRegistration from "./pages/UserRegistration";
import UserLogin from "./pages/UserLogin";
import TransactionHistory from "./pages/TransactionHistory";
import HelpSupport from "./pages/HelpSupport";
import KYCVerification from "./components/KYCVerification";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <div className="flex flex-col min-h-screen bg-[#4B0082]">
            <Header />
            <main className="flex-1 overflow-y-auto">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<Index />} />
                <Route path="/qrcode" element={<QRCodeGenerator />} />
                <Route path="/history" element={<TransactionHistory />} />
                <Route path="/register" element={<UserRegistration />} />
                <Route path="/login" element={<UserLogin />} />
                <Route path="/help-support" element={<HelpSupport />} />
                <Route path="/kyc-verification" element={<KYCVerification />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;