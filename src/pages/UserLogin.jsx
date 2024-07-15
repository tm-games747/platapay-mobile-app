import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UserLogin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [twoFactorCode, setTwoFactorCode] = useState('');

  const onSubmit = (data) => {
    console.log(data);
    // TODO: Implement actual login logic
    // For now, we'll just show the 2FA input field
    setShowTwoFactor(true);
  };

  const handleTwoFactorSubmit = () => {
    console.log('Two-factor code:', twoFactorCode);
    // TODO: Implement actual 2FA verification logic
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>User Login</CardTitle>
        </CardHeader>
        <CardContent>
          {!showTwoFactor ? (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password", { 
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long"
                    }
                  })}
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
              </div>
              <Button type="submit" className="w-full">Login</Button>
            </form>
          ) : (
            <div className="space-y-4">
              <div>
                <Label htmlFor="twoFactorCode">Enter 2FA Code</Label>
                <Input
                  id="twoFactorCode"
                  type="text"
                  value={twoFactorCode}
                  onChange={(e) => setTwoFactorCode(e.target.value)}
                  placeholder="Enter your 2FA code"
                />
              </div>
              <Button onClick={handleTwoFactorSubmit} className="w-full">Verify</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default UserLogin;