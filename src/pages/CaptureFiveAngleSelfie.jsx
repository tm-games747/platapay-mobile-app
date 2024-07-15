import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CaptureFiveAngleSelfie = () => {
  const navigate = useNavigate();
  const [selfies, setSelfies] = useState({
    front: null,
    left: null,
    right: null,
    up: null,
    down: null
  });

  const handleCapture = (angle) => {
    // TODO: Implement actual camera capture logic
    console.log(`Capturing ${angle} angle`);
    setSelfies(prev => ({ ...prev, [angle]: 'captured' }));
  };

  const handleSubmit = () => {
    // TODO: Implement submission logic
    console.log('Submitting selfies:', selfies);
    navigate('/otp-verification'); // Navigate to the next step
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Capture Five-Angle Selfie</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Please capture selfies from five different angles for ID verification.</p>
          {/* Placeholder for selfie capture UI */}
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(selfies).map(([angle, captured]) => (
              <Button key={angle} onClick={() => handleCapture(angle)}>
                {captured ? `${angle} Captured` : `Capture ${angle}`}
              </Button>
            ))}
          </div>
          <Button 
            onClick={handleSubmit} 
            className="w-full"
            disabled={Object.values(selfies).some(v => v === null)}
          >
            Submit Selfies
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CaptureFiveAngleSelfie;