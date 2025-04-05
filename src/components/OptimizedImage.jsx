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
  priority = false,
  isLogo = false
}) => {
  // Generate paths for different formats and sizes
  const getImagePath = (originalSrc, size, format) => {
    try {
      // For logos, use simpler path structure
      if (isLogo) {
        const baseName = originalSrc.split('/').pop().split('.')[0];
        return `/images/optimized/${baseName}-${size}.${format}`;
      }

      // For regular images, maintain subdirectory structure
      const pathParts = originalSrc.split('/');
      const filename = pathParts[pathParts.length - 1];
      const baseName = filename.substring(0, filename.lastIndexOf('.'));
      const subPath = pathParts.slice(2, -1).join('/');
      const optimizedPath = subPath ? `optimized/${subPath}` : 'optimized';
      return `/images/${optimizedPath}/${baseName}-${size}.${format}`;
    } catch (error) {
      console.error('Error generating image path:', error);
      return originalSrc; // Fallback to original source
    }
  };

  // Define available sizes
  const imageSizes = isLogo ? ['sm', 'md'] : ['sm', 'md', 'lg', 'xl'];
  const breakpoints = {
    sm: 320,
    md: 640,
    lg: 1024,
    xl: 1920
  };

  // Use original source as fallback
  const fallbackSrc = src;

  return (
    <picture>
      {/* AVIF format (skip for logos) */}
      {!isLogo && (
        <source
          type="image/avif"
          sizes={sizes}
          srcSet={imageSizes
            .map(size => `${getImagePath(src, size, 'avif')} ${breakpoints[size]}w`)
            .join(', ')}
        />
      )}
      
      {/* WebP format */}
      <source
        type="image/webp"
        sizes={sizes}
        srcSet={imageSizes
          .map(size => `${getImagePath(src, size, 'webp')} ${breakpoints[size]}w`)
          .join(', ')}
      />
      
      {/* Original format (fallback) */}
      <img
        src={fallbackSrc}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        decoding={priority ? 'sync' : 'async'}
        onClick={onClick}
        sizes={sizes}
        onError={(e) => {
          console.error('Error loading image:', src);
          e.target.src = fallbackSrc;
        }}
      />
    </picture>
  );
};

export default OptimizedImage; 