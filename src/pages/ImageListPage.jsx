import React from 'react';
import { Button } from "@/components/ui/button";

const images = [
  { id: 1, title: 'IMG_0744.jpeg', path: '/IMG_0744.jpeg' },
  { id: 2, title: 'IMG_0742.webp', path: '/IMG_0742.webp' },
  { id: 3, title: 'IMG_1767.png', path: '/IMG_1767.png' },
  { id: 4, title: 'IMG_1775.png', path: '/IMG_1775.png' },
  { id: 5, title: 'IMG_1446.png', path: '/IMG_1446.png' },
  { id: 6, title: 'IMG_1792.jpeg', path: '/IMG_1792.jpeg' },
  { id: 7, title: 'IMG_1790.png', path: '/IMG_1790.png' },
  { id: 8, title: '4f576cd6-5a09-40b1-ab8f-f7909c71136a.jpeg', path: '/4f576cd6-5a09-40b1-ab8f-f7909c71136a.jpeg' },
  { id: 9, title: 'IMG_1785.png', path: '/IMG_1785.png' },
  { id: 10, title: 'IMG_1776.png', path: '/IMG_1776.png' },
  { id: 11, title: 'IMG_1795.jpeg', path: '/IMG_1795.jpeg' },
  { id: 12, title: 'IMG_1794.jpeg', path: '/IMG_1794.jpeg' },
  { id: 13, title: 'IMG_0743.jpeg', path: '/IMG_0743.jpeg' },
  { id: 14, title: 'IMG_1797.png', path: '/IMG_1797.png' },
  { id: 15, title: 'IMG_1801.png', path: '/IMG_1801.png' },
  { id: 16, title: 'IMG_1796.jpeg', path: '/IMG_1796.jpeg' },
  { id: 17, title: 'IMG_1806.png', path: '/IMG_1806.png' },
  { id: 18, title: 'IMG_1805.png', path: '/IMG_1805.png' },
  { id: 19, title: 'IMG_1807.jpeg', path: '/IMG_1807.jpeg' },
  { id: 20, title: 'IMG_1804.png', path: '/IMG_1804.png' },
  { id: 21, title: 'Untitled (1200 x 300 px).png', path: '/Untitled (1200 x 300 px).png' },
  { id: 22, title: 'IMG_1878.jpeg', path: '/IMG_1878.jpeg' },
  { id: 23, title: 'Untitled design.png', path: '/Untitled design.png' },
  { id: 24, title: 'd4206e35-b894-4d2c-b09e-de66b76ccc34.jpeg', path: '/d4206e35-b894-4d2c-b09e-de66b76ccc34.jpeg' },
];

const ImageListPage = () => {
  const handleUpload = () => {
    console.log('Upload button clicked');
    // In a real implementation, this would trigger a file upload process
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Image List</h1>
      <Button onClick={handleUpload} className="mb-4">Upload New Image</Button>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div key={image.id} className="border rounded p-2">
            <img 
              src={image.path} 
              alt={image.title} 
              className="w-full h-32 object-cover mb-2"
            />
            <p className="text-sm truncate">{image.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageListPage;