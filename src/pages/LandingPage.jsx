import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PesoSymbol = ({ index }) => (
  <motion.div
    className="absolute text-white text-2xl font-bold"
    initial={{ 
      x: `${Math.random() * 100}vw`, 
      y: `${Math.random() * 100}vh` 
    }}
    animate={{ 
      x: `${Math.random() * 100}vw`, 
      y: `${Math.random() * 100}vh` 
    }}
    transition={{ 
      duration: 10 + Math.random() * 20,
      repeat: Infinity,
      repeatType: "reverse"
    }}
    style={{
      zIndex: 5
    }}
  >
    ₱
  </motion.div>
);

export default function LandingPage({ onAuthenticate }) {
  const [activeDrawer, setActiveDrawer] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const drawerVariants = {
    hidden: { y: '100%' },
    visible: { y: '0%', transition: { type: 'spring', stiffness: 300, damping: 30 } },
  };

  const handleDrawerOpen = useCallback((drawer) => {
    setActiveDrawer(drawer);
    setError('');
  }, []);

  const handleDrawerClose = useCallback(() => {
    setActiveDrawer(null);
    setError('');
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (username === 'bossmarc' && password === 'Bossmarc@747') {
      onAuthenticate();
    } else {
      setError('Invalid username or password');
    }
  }, [username, password, onAuthenticate]);

  return (
    <div className="fixed inset-0 z-50 bg-purple-900 text-white overflow-hidden">
      {/* Text Elements */}
      <div className="absolute top-0 left-0 right-0 z-20 p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to PlataPay</h1>
        <p className="text-xl mb-8">Your Fintech Solution for the Future</p>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/Platapayglobe Background Removed.png"
          alt="Platapay Globe"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Floating Peso Symbols */}
      {Array.from({ length: 20 }, (_, index) => (
        <PesoSymbol key={index} index={index} />
      ))}

      {/* Content */}
      <div className={`relative z-10 min-h-screen flex flex-col ${activeDrawer ? 'blur-sm' : ''}`}>
        <main className="flex-grow flex items-center justify-center p-4">
          {/* Main content area is now empty as text has been moved to the top */}
        </main>
      </div>

      {/* Fixed "Buttons" */}
      <div className="fixed bottom-16 left-0 right-0 flex justify-center space-x-4 p-4 z-20">
        <motion.button
          className="bg-purple-600 text-white px-12 py-3 rounded-full cursor-pointer shadow-lg text-center w-40"
          onClick={() => handleDrawerOpen('login')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign In
        </motion.button>
        <motion.button
          className="bg-white text-purple-800 px-12 py-3 rounded-full cursor-pointer shadow-lg text-center w-40"
          onClick={() => handleDrawerOpen('register')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Register
        </motion.button>
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
            <button onClick={handleDrawerClose} className="absolute top-4 right-4 text-purple-600" aria-label="Close">
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
                  required
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
                  required
                />
              </div>
              {error && <p className="text-red-500" role="alert">{error}</p>}
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
            <button onClick={handleDrawerClose} className="absolute top-4 right-4 text-purple-600" aria-label="Close">
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4">Create Your Account</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" type="text" placeholder="Enter your full name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">Password</Label>
                <Input id="newPassword" type="password" placeholder="Create a password" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" type="password" placeholder="Confirm your password" required />
              </div>
              <Button type="submit" className="w-full">Register</Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}