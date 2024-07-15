import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SignatureCapture from './SignatureCapture';
import IDCapture from './IDCapture';
import SelfieCapture from './SelfieCapture';
import OTPVerification from './OTPVerification';
import SuccessScreen from './SuccessScreen';

const KYCVerification = () => {
  const [step, setStep] = useState('signature');

  const renderStep = () => {
    switch (step) {
      case 'signature':
        return <SignatureCapture onComplete={() => setStep('id')} />;
      case 'id':
        return <IDCapture onComplete={() => setStep('selfie')} />;
      case 'selfie':
        return <SelfieCapture onComplete={() => setStep('otp')} />;
      case 'otp':
        return <OTPVerification onComplete={() => setStep('success')} />;
      case 'success':
        return <SuccessScreen />;
      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>KYC Verification</CardTitle>
      </CardHeader>
      <CardContent>
        {renderStep()}
      </CardContent>
    </Card>
  );
};

export default KYCVerification;