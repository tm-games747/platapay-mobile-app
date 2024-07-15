import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CreateAccountScreen = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/register');
  };

  return (
    <div className="container mx-auto p-4 flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Welcome to PlataPay</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-muted-foreground">
            Join our community and start managing your finances with ease.
          </p>
          <Button 
            onClick={handleCreateAccount} 
            className="w-full"
            size="lg"
          >
            Create Account
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            Already have an account? <a href="/login" className="text-primary hover:underline">Log in</a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateAccountScreen;