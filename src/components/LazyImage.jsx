import React from 'react';

const LazyImage = ({ src, alt, ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = '/placeholder.svg'; // Fallback image
      }}
      {...props}
    />
  );
};

export default LazyImage;