import React, { useState } from 'react';
import RegistrationForm from '@/components/RegistrationForm';
import OTPVerification from '@/components/OTPVerification';
import { useNavigate } from 'react-router-dom';

const UserRegistration = () => {
  const [registrationStep, setRegistrationStep] = useState('form');
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  const handleRegistrationSubmit = (data) => {
    console.log('Registration data:', data);
    setUserDetails(data);
    setRegistrationStep('otp');
    // TODO: Implement API call to send OTP
  };

  const handleOTPVerify = (otp) => {
    console.log('OTP entered:', otp);
    // TODO: Implement API call to verify OTP
    navigate('/registration-success');
  };

  const renderStep = () => {
    switch (registrationStep) {
      case 'form':
        return <RegistrationForm onSubmit={handleRegistrationSubmit} />;
      case 'otp':
        return <OTPVerification onVerify={handleOTPVerify} />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4">
      {renderStep()}
    </div>
  );
};

export default UserRegistration;