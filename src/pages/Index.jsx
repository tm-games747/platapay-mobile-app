import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Wallet, Shield, Zap, Smartphone } from 'lucide-react';
import heroImage from '../../public/images/hero-image.jpg';

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-primary text-primary-foreground py-20 px-4 md:px-8 lg:px-16 relative">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Hero Background" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Your Money, Your Way</h1>
          <p className="text-xl md:text-2xl mb-8">Experience the future of digital payments with PlataPay</p>
          <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            Get Started <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-background">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose PlataPay?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard icon={<Wallet />} title="Easy Transactions" description="Send and receive money with just a few taps" />
          <FeatureCard icon={<Shield />} title="Secure Payments" description="Bank-grade encryption for all your transactions" />
          <FeatureCard icon={<Zap />} title="Instant Transfers" description="Real-time money transfers to anyone, anywhere" />
          <FeatureCard icon={<Smartphone />} title="Mobile First" description="Designed for the best mobile experience" />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-muted">
        <h2 className="text-3xl font-bold text-center mb-12">How PlataPay Works</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <StepCard number="1" title="Sign Up" description="Create your account in minutes" />
          <StepCard number="2" title="Add Funds" description="Load your wallet using various methods" />
          <StepCard number="3" title="Start Paying" description="Use PlataPay for all your transactions" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-4 md:px-8 lg:px-16 bg-primary text-primary-foreground text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8">Join thousands of users who trust PlataPay for their digital transactions</p>
        <Button size="lg" variant="secondary">
          Create Your Account
        </Button>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <Card className="text-center">
    <CardHeader>
      <div className="mx-auto bg-primary text-primary-foreground p-3 rounded-full w-16 h-16 flex items-center justify-center">
        {icon}
      </div>
      <CardTitle className="mt-4">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{description}</p>
    </CardContent>
  </Card>
);

const StepCard = ({ number, title, description }) => (
  <Card className="text-center w-full md:w-64">
    <CardHeader>
      <div className="mx-auto bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold">
        {number}
      </div>
      <CardTitle className="mt-4">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{description}</p>
    </CardContent>
  </Card>
);

export default Index;