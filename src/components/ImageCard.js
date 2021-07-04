import { useRef, useEffect, useState } from 'react';

const ImageCard = ({ image }) => {
  const [spans, setSpans] = useState(0);

  const imageRef = useRef(null);
  useEffect(() => {
    imageRef.current?.addEventListener('load', declareSpans);
  });

  const declareSpans = () => {
    const height = imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    setSpans(spans);
  };

  const { description, urls } = image;

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img alt={description} src={urls.regular} />
    </div>
  );
};

export default ImageCard;
