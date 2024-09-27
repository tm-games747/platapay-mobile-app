import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function RotatingBox() {
  const meshRef = useRef();
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
    }
  });
  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 1, 0.1]} />
      <meshStandardMaterial color="purple" />
    </mesh>
  );
}

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
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-50">
        <Canvas>
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <RotatingBox />
          <Environment preset="city" />
        </Canvas>
      </div>

      {/* Content */}
      <div className={`relative z-10 min-h-screen flex flex-col ${activeDrawer ? 'blur-sm' : ''}`}>
        <header className="p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <CreditCard className="h-8 w-8" />
            <span className="text-2xl font-bold">PlataPay</span>
          </div>
        </header>

        <main className="flex-grow flex items-center justify-center p-4">
          <div className="text-center">
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
            {/* Additional space for footer */}
            <div className="h-32"></div>
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
            {/* Additional space for footer */}
            <div className="h-32"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}