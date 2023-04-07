import React, { ImgHTMLAttributes, useEffect, useState } from 'react';
import './styles.css';

type MediaImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  className?: string;
};

export const MediaImage: React.FC<MediaImageProps> = ({ src, className }) => {
  const [imgSrc, setImgSrc] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (src) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImgSrc(src);
      };
    }
  }, [src]);

  return (
    <div className={`placeholder ${className}`}>
      {loading ? <div>Loading ...</div> : <img className="image" src={imgSrc} />}
    </div>
  );
};
