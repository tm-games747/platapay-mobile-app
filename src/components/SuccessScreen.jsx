import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SuccessScreen = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/wallet');
  };

  return (
    <Card className="w-full max-w-md mx-auto text-center">
      <CardHeader>
        <CardTitle className="flex items-center justify-center">
          <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h2 className="text-2xl font-bold mb-4">Verification Successful!</h2>
        <p className="mb-6">Your account has been successfully verified.</p>
        <Button onClick={handleContinue} className="w-full">Continue to E-Wallet</Button>
      </CardContent>
    </Card>
  );
};

export default SuccessScreen;