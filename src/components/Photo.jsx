import { useState } from 'react';

// Replaces the <image-slot> web component: a cover-fit photo filling its
// positioned parent, with a caption shown while loading or if it fails.
export default function Photo({ src, alt, radius, mask, className = '', style }) {
  const [status, setStatus] = useState('loading');
  const shape = {};
  if (mask) shape.clipPath = mask;
  else if (radius != null) shape.borderRadius = radius;

  return (
    <div className={`photo ${className}`} style={{ ...shape, ...style }}>
      {status !== 'loaded' && <span className="photo-caption">{alt}</span>}
      {status !== 'error' && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          style={{ opacity: status === 'loaded' ? 1 : 0, transition: 'opacity 0.6s ease' }}
        />
      )}
    </div>
  );
}

