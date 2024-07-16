import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ImageRenderer = ({ url, alt, width = 300, height = 200 }) => {
  const [imageStatus, setImageStatus] = useState('loading');

  useEffect(() => {
    setImageStatus('loading');
    const img = new Image();
    img.onload = () => setImageStatus('loaded');
    img.onerror = () => setImageStatus('error');
    img.src = url;
  }, [url]);

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        {imageStatus === 'loading' && (
          <Skeleton className="w-full h-full" style={{ width, height }} />
        )}
        {imageStatus === 'loaded' && (
          <img
            src={url}
            alt={alt}
            className="w-full h-full object-cover"
            style={{ width, height }}
          />
        )}
        {imageStatus === 'error' && (
          <div
            className="flex items-center justify-center bg-muted text-muted-foreground"
            style={{ width, height }}
          >
            Failed to load image
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ImageRenderer;