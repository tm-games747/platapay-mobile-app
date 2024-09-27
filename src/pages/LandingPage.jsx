import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LandingPage({ onAuthenticate }) {
  const [activeDrawer, setActiveDrawer] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const drawerVariants = {
    hidden: { y: '100%' },
    visible: { y: '0%', transition: { type: 'spring', stiffness: 300, damping: 30 } },
  };

  const handleDrawerOpen = (drawer) => {
    setActiveDrawer(drawer);
    setError('');
  };

  const handleDrawerClose = () => {
    setActiveDrawer(null);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'bossmarc' && password === 'Bossmarc@747') {
      onAuthenticate();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-purple-900 text-white overflow-hidden">
      {/* Globe Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/Platapayglobe Background Removed.png"
          alt="Platapay Globe"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Rotating Peso Symbols */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src="/Untitled (512 x 512 px) Background Removed.png"
            alt="Rotating Peso"
            className="absolute w-12 h-12 animate-spin-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${10 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className={`relative z-10 min-h-screen flex flex-col ${activeDrawer ? 'blur-sm' : ''}`}>
        <header className="p-4 flex justify-between items-center">
          <img
            src="/logobig Background Removed.png"
            alt="Platapay Logo"
            className="h-16 w-auto object-contain"
          />
        </header>

        <main className="flex-grow flex items-center justify-center p-4">
          <div className="text-center mt-[-10%]">
            <h1 className="text-4xl font-bold mb-4">Welcome to PlataPay</h1>
            <p className="text-xl mb-8">Your Fintech Solution for the Future</p>
          </div>
        </main>
      </div>

      {/* Fixed "Buttons" */}
      <div className="fixed bottom-16 left-0 right-0 flex justify-center space-x-4 p-4 z-20">
        <motion.div
          className="bg-purple-600 text-white px-12 py-3 rounded-full cursor-pointer shadow-lg text-center w-40"
          onClick={() => handleDrawerOpen('login')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign In
        </motion.div>
        <motion.div
          className="bg-white text-purple-800 px-12 py-3 rounded-full cursor-pointer shadow-lg text-center w-40"
          onClick={() => handleDrawerOpen('register')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Register
        </motion.div>
      </div>

      {/* Login Drawer */}
      <AnimatePresence>
        {activeDrawer === 'login' && (
          <motion.div
            className="fixed inset-x-4 bottom-4 bg-white text-purple-900 rounded-3xl p-8 z-30 shadow-2xl"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={drawerVariants}
            style={{ maxHeight: 'calc(100vh - 8rem)', overflowY: 'auto' }}
          >
            <button onClick={handleDrawerClose} className="absolute top-4 right-4 text-purple-600">
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4">Sign In to Your Account</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <Button type="submit" className="w-full">Sign In</Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Register Drawer */}
      <AnimatePresence>
        {activeDrawer === 'register' && (
          <motion.div
            className="fixed inset-x-4 bottom-4 bg-white text-purple-900 rounded-3xl p-8 z-30 shadow-2xl"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={drawerVariants}
            style={{ maxHeight: 'calc(100vh - 8rem)', overflowY: 'auto' }}
          >
            <button onClick={handleDrawerClose} className="absolute top-4 right-4 text-purple-600">
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4">Create Your Account</h2>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" type="text" placeholder="Enter your full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">Password</Label>
                <Input id="newPassword" type="password" placeholder="Create a password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" type="password" placeholder="Confirm your password" />
              </div>
              <Button className="w-full">Register</Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}