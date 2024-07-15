import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import SignatureCanvas from 'react-signature-canvas';

const SignatureCapture = ({ onComplete }) => {
  const sigCanvas = useRef();
  const [signature, setSignature] = useState(null);

  const handleClear = () => {
    sigCanvas.current.clear();
    setSignature(null);
  };

  const handleSave = () => {
    setSignature(sigCanvas.current.toDataURL());
  };

  const handleSubmit = () => {
    if (signature) {
      // TODO: Send signature data to backend
      onComplete();
    } else {
      alert('Please provide a signature');
    }
  };

  return (
    <div className="space-y-4">
      <div className="border border-gray-300 rounded">
        <SignatureCanvas
          ref={sigCanvas}
          canvasProps={{
            width: 300,
            height: 150,
            className: 'signature-canvas'
          }}
        />
      </div>
      <div className="flex space-x-2">
        <Button onClick={handleClear} variant="outline">Clear</Button>
        <Button onClick={handleSave}>Save</Button>
      </div>
      <Button onClick={handleSubmit} className="w-full">Submit Signature</Button>
    </div>
  );
};

export default SignatureCapture;