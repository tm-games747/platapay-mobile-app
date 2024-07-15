import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const RequestedScreens = () => {
  const screens = [
    {
      category: "Account Registration",
      items: [
        { title: "Create Account", path: "/create-account" },
        { title: "Personal Information", path: "/personal-information" },
        { title: "Home Address", path: "/home-address" },
        { title: "MPIN Nomination", path: "/mpin-nomination" },
        { title: "OTP Verification", path: "/otp-verification" },
        { title: "Registration Success", path: "/registration-success" },
      ],
    },
    {
      category: "KYC Verification",
      items: [
        { title: "Capture Specimen Signature", path: "/capture-signature" },
        { title: "Capture Valid ID", path: "/capture-valid-id" },
        { title: "Capture Five Angle Selfie", path: "/capture-five-angle-selfie" },
      ],
    },
    {
      category: "Account Management",
      items: [
        { title: "Account Verification Overview", path: "/verify-account" },
      ],
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Requested Screens</CardTitle>
        </CardHeader>
        <CardContent>
          {screens.map((category, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-xl font-semibold mb-3">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((screen, screenIndex) => (
                  <Button key={screenIndex} asChild variant="outline" className="w-full">
                    <Link to={screen.path}>{screen.title}</Link>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default RequestedScreens;