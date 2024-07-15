import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AccountVerificationOverview = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/verify-account/personal-info');
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Verify your account</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Enjoy higher account limits by upgrading your account through simple verification.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Complete your personal information</li>
            <li>Capture your valid ID</li>
            <li>Take a selfie for verification</li>
          </ul>
          <Button onClick={handleStart} className="w-full">Start</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountVerificationOverview;