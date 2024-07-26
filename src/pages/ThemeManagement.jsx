import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

const ThemeManagement = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Theme Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Current theme: {theme}</p>
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => setTheme("light")}>Light Theme</Button>
            <Button onClick={() => setTheme("dark")}>Dark Theme</Button>
            <Button onClick={() => setTheme("blue")}>Blue Theme</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThemeManagement;