import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Text } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Globe() {
  return (
    <Sphere args={[1, 64, 64]}>
      <meshStandardMaterial color="#4B0082" />
    </Sphere>
  );
}

function PesoSymbol({ index }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime() + index;
    ref.current.position.x = Math.sin(t) * 2;
    ref.current.position.z = Math.cos(t) * 2;
    ref.current.position.y = Math.sin(t * 2);
  });
  return (
    <Text ref={ref} fontSize={0.5} color="#FFD700">
      ₱
    </Text>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Globe />
      {[...Array(5)].map((_, index) => (
        <PesoSymbol key={index} index={index} />
      ))}
    </>
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
        <Canvas camera={{ position: [0, 0, 5] }}>
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          <Scene />
        </Canvas>
      </div>

      {/* Content */}
      <div className={`relative z-10 min-h-screen flex flex-col ${activeDrawer ? 'blur-sm' : ''}`}>
        <header className="p-4 flex justify-between items-center">
          <img
            src="/IMG_1878.jpeg"
            alt="Platapay Logo"
            className="h-16 w-auto object-contain"
          />
        </header>

        <main className="flex-grow flex items-center justify-center p-4">
          <div className="text-center mt-[-10%]">
            <img
              src="/Untitled (1200 x 300 px).png"
              alt="Platapay Banner"
              className="w-full max-w-3xl mx-auto mb-8"
            />
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