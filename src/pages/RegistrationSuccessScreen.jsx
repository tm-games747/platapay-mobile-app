import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';

const RegistrationSuccessScreen = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4 flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="flex items-center justify-center">
            <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-2xl font-bold mb-4">Registration Successful!</h2>
          <p className="mb-6">Your account has been successfully created.</p>
          <Button onClick={handleContinue} className="w-full">
            Continue to Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegistrationSuccessScreen;