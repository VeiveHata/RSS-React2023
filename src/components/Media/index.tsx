import React, { ImgHTMLAttributes, useEffect, useState } from 'react';
import './styles.css';
import { Loading } from 'components/Loading';

type MediaImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  className?: string;
};

export const MediaImage: React.FC<MediaImageProps> = ({ src, className }) => {
  const [imgSrc, setImgSrc] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (src) {
      setLoading(true);
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImgSrc(src);
        setLoading(false);
      };
    }
  }, [src]);

  return (
    <div className={`placeholder ${className}`}>
      {loading ? <Loading /> : <img className="image" src={imgSrc} />}
    </div>
  );
};
