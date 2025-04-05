import React from 'react';

const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  sizes = '100vw',
  onClick,
  priority = false
}) => {
  // Generate paths for different formats and sizes
  const getImagePath = (originalSrc, size, format) => {
    const path = originalSrc.replace('/images/', '/images/optimized/');
    const filename = path.substring(0, path.lastIndexOf('.'));
    return `${filename}-${size}.${format}`;
  };

  // Define available sizes
  const imageSizes = ['sm', 'md', 'lg', 'xl'];
  const breakpoints = {
    sm: 320,
    md: 640,
    lg: 1024,
    xl: 1920
  };

  return (
    <picture>
      {/* AVIF format */}
      <source
        type="image/avif"
        sizes={sizes}
        srcSet={imageSizes
          .map(size => `${getImagePath(src, size, 'avif')} ${breakpoints[size]}w`)
          .join(', ')}
      />
      
      {/* WebP format */}
      <source
        type="image/webp"
        sizes={sizes}
        srcSet={imageSizes
          .map(size => `${getImagePath(src, size, 'webp')} ${breakpoints[size]}w`)
          .join(', ')}
      />
      
      {/* JPEG format (fallback) */}
      <img
        src={getImagePath(src, 'lg', 'jpg')}
        srcSet={imageSizes
          .map(size => `${getImagePath(src, size, 'jpg')} ${breakpoints[size]}w`)
          .join(', ')}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        decoding={priority ? 'sync' : 'async'}
        onClick={onClick}
        sizes={sizes}
      />
    </picture>
  );
};

export default OptimizedImage; 