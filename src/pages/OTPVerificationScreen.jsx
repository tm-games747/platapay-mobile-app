import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const OTPVerificationScreen = () => {
  const [otp, setOtp] = useState('');
  const [countdown, setCountdown] = useState(30);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = countdown > 0 && setInterval(() => setCountdown(countdown - 1), 1000);
    return () => clearInterval(timer);
  }, [countdown]);

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setOtp(value.slice(0, 6));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      toast.error("Please enter a 6-digit OTP");
      return;
    }
    
    // Placeholder for OTP verification logic
    console.log("Verifying OTP:", otp);
    toast.success("OTP verified successfully");
    // Navigate to the next screen after successful verification
    navigate('/');
  };

  const handleResendOTP = () => {
    // Placeholder for resend OTP logic
    console.log("Resending OTP");
    setCountdown(30);
    toast.success("OTP resent successfully");
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>OTP Verification</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Please enter the 6-digit code sent to your registered mobile number.
            </p>
            <div>
              <Input
                type="text"
                placeholder="Enter 6-digit OTP"
                value={otp}
                onChange={handleOtpChange}
                maxLength={6}
                className="text-center text-2xl tracking-widest"
              />
            </div>
            <Button type="submit" className="w-full">Verify OTP</Button>
            <div className="text-center">
              {countdown > 0 ? (
                <p className="text-sm text-muted-foreground">Resend OTP in {countdown} seconds</p>
              ) : (
                <Button variant="link" onClick={handleResendOTP}>Resend OTP</Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default OTPVerificationScreen;