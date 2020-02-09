import React, { useState } from 'react';

interface Props {
  placeholder: React.ReactNode;
  imgSrc?: string;
}

const LazyLoadImage: React.FunctionComponent<Props> = ({ placeholder, imgSrc, children }) => {
  const [loaded, setLoaded] = useState(false);

  const onLoad = () => {
    setTimeout(() => {
      setLoaded(true);
    }, 100);
  };

  return (
    <>
      {!loaded && placeholder}
      <img src={imgSrc} style={{ display: loaded ? '' : 'none' }} onLoad={onLoad} />
    </>
  );
};

export default LazyLoadImage;
