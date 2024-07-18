import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const CaptureValidIDScreen = () => {
  const [idType, setIdType] = useState('');
  const [idImage, setIdImage] = useState(null);
  const navigate = useNavigate();

  const handleCapture = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setIdImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (idType && idImage) {
      // TODO: Implement API call to submit ID data
      console.log('Submitting ID:', { type: idType, image: idImage });
      toast.success('ID captured successfully');
      navigate('/otp-verification'); // Navigate to the next step
    } else {
      toast.error('Please select an ID type and capture an image');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Capture Valid ID</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Select onValueChange={setIdType} value={idType}>
            <SelectTrigger>
              <SelectValue placeholder="Select ID Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="drivers_license">Driver's License</SelectItem>
              <SelectItem value="passport">Passport</SelectItem>
              <SelectItem value="national_id">National ID</SelectItem>
            </SelectContent>
          </Select>
          
          <div className="flex flex-col items-center">
            {idImage && (
              <img src={idImage} alt="Captured ID" className="mb-4 max-w-full h-auto" />
            )}
            <Button onClick={() => document.getElementById('id-input').click()}>
              {idImage ? 'Retake Photo' : 'Capture ID'}
            </Button>
            <input
              id="id-input"
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleCapture}
              className="hidden"
            />
          </div>
          
          <Button onClick={handleSubmit} className="w-full" disabled={!idType || !idImage}>
            Submit ID
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CaptureValidIDScreen;