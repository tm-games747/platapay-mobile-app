import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const IDCapture = ({ onComplete }) => {
  const fileInputRef = useRef();
  const [idType, setIdType] = useState('');
  const [idImage, setIdImage] = useState(null);

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
      // TODO: Send ID data to backend
      onComplete();
    } else {
      alert('Please select an ID type and capture an image');
    }
  };

  return (
    <div className="space-y-4">
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
        {idImage && <img src={idImage} alt="Captured ID" className="mb-4 max-w-full h-auto" />}
        <Button onClick={() => fileInputRef.current.click()}>
          {idImage ? 'Retake Photo' : 'Capture ID'}
        </Button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleCapture}
          accept="image/*"
          capture="environment"
          className="hidden"
        />
      </div>
      <Button onClick={handleSubmit} className="w-full" disabled={!idType || !idImage}>
        Submit ID
      </Button>
    </div>
  );
};

export default IDCapture;