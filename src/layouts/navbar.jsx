import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { CircleUser, Menu, Package2 } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { navItems } from "../App";
import { useState } from "react";

const Layout = () => {
  const [isSignedIn, setIsSignedIn] = useState(false); // This should be managed by your authentication system

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-primary px-4 md:px-6">
        <div className="flex items-center justify-between w-full">
          <MobileNav />
          <div className="flex items-center justify-center flex-grow">
            <img src="/images/logo.png" alt="PlataPay Logo" className="h-8 w-8 mr-2" />
            <span className="text-xl font-bold text-primary-foreground">PlataPay</span>
          </div>
          <div className="flex items-center">
            {isSignedIn ? (
              <UserMenu />
            ) : (
              <>
                <NavLink to="/login" className="text-primary-foreground hover:text-secondary-foreground mr-4">
                  Login
                </NavLink>
                <NavLink to="/register" className="text-primary-foreground hover:text-secondary-foreground">
                  Register
                </NavLink>
              </>
            )}
          </div>
        </div>
      </header>
      <main className="flex-grow overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

const MobileNav = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="shrink-0 md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left">
      <nav className="grid gap-6 text-lg font-medium">
        <NavItem
          to="/"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Platapay</span>
        </NavItem>
        {navItems.map((item) => (
          <NavItem key={item.to} to={item.to}>
            {item.title}
          </NavItem>
        ))}
      </nav>
    </SheetContent>
  </Sheet>
);

const UserMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="secondary" size="icon" className="rounded-full">
        <CircleUser className="h-5 w-5" />
        <span className="sr-only">Toggle user menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuItem>Support</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const NavItem = ({ to, children, className }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "transition-colors",
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground",
        className,
      )
    }
  >
    {children}
  </NavLink>
);

export default Layout;