import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, List, Wallet, UserPlus } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Use the sidebar layout
import Index from "./pages/Index.jsx";
import TodoList from "./pages/TodoList.jsx";
import EWallet from "./pages/EWallet.jsx";
import UserRegistration from "./pages/UserRegistration.jsx"; // Import the new UserRegistration page

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-6 w-6" />,
  },
  {
    title: "Todo List",
    to: "/todo",
    icon: <List className="h-6 w-6" />,
  },
  {
    title: "E-Wallet",
    to: "/wallet",
    icon: <Wallet className="h-6 w-6" />,
  },
  {
    title: "Register",
    to: "/register",
    icon: <UserPlus className="h-6 w-6" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="todo" element={<TodoList />} />
              <Route path="wallet" element={<EWallet />} />
              <Route path="register" element={<UserRegistration />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;