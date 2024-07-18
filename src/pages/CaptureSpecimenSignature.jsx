import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SignatureCapture from '@/components/SignatureCapture';

const CaptureSpecimenSignature = () => {
  const navigate = useNavigate();

  const handleSignatureComplete = () => {
    // TODO: Implement logic to save the signature
    console.log('Signature captured');
    navigate('/otp-verification'); // Navigate to the next step
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Capture Specimen Signature</CardTitle>
        </CardHeader>
        <CardContent>
          <SignatureCapture onComplete={handleSignatureComplete} />
          <p className="text-sm text-muted-foreground mt-4">
            Please sign in the box above. This signature will be used for verification purposes.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CaptureSpecimenSignature;