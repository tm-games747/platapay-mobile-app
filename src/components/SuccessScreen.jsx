import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';

const SuccessScreen = ({ onContinue }) => {
  return (
    <Card className="w-full max-w-md mx-auto text-center">
      <CardHeader>
        <CardTitle className="flex items-center justify-center">
          <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h2 className="text-2xl font-bold mb-4">Success!</h2>
        <p className="mb-6">Your account has been successfully created.</p>
        <Button onClick={onContinue} className="w-full">Continue</Button>
      </CardContent>
    </Card>
  );
};

export default SuccessScreen;