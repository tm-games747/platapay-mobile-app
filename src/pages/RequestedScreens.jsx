import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const RequestedScreens = () => {
  const screens = [
    { title: "Create Account", path: "/create-account" },
    { title: "Personal Information", path: "/personal-information" },
    { title: "Home Address", path: "/home-address" },
    { title: "MPIN Nomination", path: "/mpin-nomination" },
    { title: "OTP Verification", path: "/otp-verification" },
    { title: "Registration Success", path: "/registration-success" },
    { title: "Capture Specimen Signature", path: "/capture-signature" },
    { title: "Capture Valid ID", path: "/capture-valid-id" },
    { title: "Capture Five Angle Selfie", path: "/capture-five-angle-selfie" },
    { title: "Account Verification Overview", path: "/verify-account" },
  ];

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Requested Screens</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {screens.map((screen, index) => (
              <Button key={index} asChild variant="outline" className="w-full">
                <Link to={screen.path}>{screen.title}</Link>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RequestedScreens;