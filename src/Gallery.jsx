import React, { useState, useEffect } from 'react';

const Gallery = ({ imgs, orientation }) => {
  console.log({ orientation });
  const imgUrls = imgs.map(
    (img) =>
      `https://hanilim.github.io/interview/gallery-98j9ewmt7i/image${img.id}.jpeg`
  );
  const [images, setImages] = useState(imgUrls);

  useEffect(() => {
    if (orientation === 'Landscape') {
      const landscapeImgs = imgs.filter((img) => !img.isPortrait);
      const landscapeImgsIds = landscapeImgs.map(
        (img) =>
          `https://hanilim.github.io/interview/gallery-98j9ewmt7i/image${img.id}.jpeg`
      );
      setImages(landscapeImgsIds);
    }
    if (orientation === 'Portrait') {
      const portraitImgs = imgs.filter((img) => img.isPortrait);
      const portraitImgsIds = portraitImgs.map(
        (img) =>
          `https://hanilim.github.io/interview/gallery-98j9ewmt7i/image${img.id}.jpeg`
      );
      setImages(portraitImgsIds);
    }
    if (orientation === 'All') {
      const allImgs = imgs.map(
        (img) =>
          `https://hanilim.github.io/interview/gallery-98j9ewmt7i/image${img.id}.jpeg`
      );
      setImages(allImgs);
    }
  }, [orientation]);
  return (
    <div className='image-grid'>
      {images.map((img) => (
        <img src={img} alt='' key={img} />
      ))}
    </div>
  );
};

export default Gallery;
