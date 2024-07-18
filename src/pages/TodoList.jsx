import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { QRCodeSVG } from 'qrcode.react';
import { Download, Share2 } from "lucide-react";

const QRCodeGenerator = () => {
  const [inputText, setInputText] = useState("");
  const [qrCode, setQRCode] = useState("");

  const generateQRCode = () => {
    setQRCode(inputText);
  };

  const downloadQRCode = () => {
    const svg = document.getElementById("qr-code");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = "qrcode";
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };

  const shareQRCode = () => {
    if (navigator.share) {
      navigator.share({
        title: 'QR Code',
        text: 'Check out this QR Code!',
        url: window.location.href,
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
      console.log('Web Share API not supported');
      // Fallback behavior for browsers that don't support Web Share API
      alert('Sharing is not supported on this browser. You can copy the URL manually.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>QR Code Generator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="input-text">Enter text or URL</Label>
              <Input
                id="input-text"
                placeholder="Enter text or URL to generate QR code"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
            </div>
            <Button onClick={generateQRCode}>Generate QR Code</Button>
            {qrCode && (
              <div className="space-y-4">
                <div className="flex justify-center">
                  <QRCodeSVG id="qr-code" value={qrCode} size={200} />
                </div>
                <div className="flex justify-center space-x-2">
                  <Button onClick={downloadQRCode} variant="outline">
                    <Download className="mr-2 h-4 w-4" /> Download
                  </Button>
                  <Button onClick={shareQRCode} variant="outline">
                    <Share2 className="mr-2 h-4 w-4" /> Share
                  </Button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QRCodeGenerator;