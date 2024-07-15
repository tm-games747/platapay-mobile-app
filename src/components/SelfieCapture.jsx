import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";

const SelfieCapture = ({ onComplete }) => {
  const [selfies, setSelfies] = useState([]);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (err) {
      console.error("Error accessing the camera", err);
    }
  };

  const captureImage = () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, 300, 150);
    const imageDataUrl = canvasRef.current.toDataURL('image/jpeg');
    setSelfies([...selfies, imageDataUrl]);
  };

  const handleSubmit = () => {
    if (selfies.length >= 3) {
      // TODO: Send selfie data to backend
      onComplete();
    } else {
      alert('Please capture at least 3 selfies');
    }
  };

  return (
    <div className="space-y-4">
      <video ref={videoRef} autoPlay className="w-full" />
      <canvas ref={canvasRef} width={300} height={150} className="hidden" />
      <div className="flex justify-between">
        <Button onClick={startCamera}>Start Camera</Button>
        <Button onClick={captureImage} disabled={selfies.length >= 6}>Capture</Button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {selfies.map((selfie, index) => (
          <img key={index} src={selfie} alt={`Selfie ${index + 1}`} className="w-full h-auto" />
        ))}
      </div>
      <Button onClick={handleSubmit} className="w-full" disabled={selfies.length < 3}>
        Submit Selfies
      </Button>
    </div>
  );
};

export default SelfieCapture;