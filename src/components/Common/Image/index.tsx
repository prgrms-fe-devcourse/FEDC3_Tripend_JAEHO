import {
  CSSProperties,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react';

let observer: IntersectionObserver | null = null;
const LOAD_IMG_EVENT_TYPE = 'loadImage';

// eslint-disable-next-line no-undef
const onIntersection: IntersectionObserverCallback = (entries, io) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target);
      entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT_TYPE));
    }
  });
};

interface ImageProps {
  lazy: boolean;
  threshold?: number | number[];
  placeholder: string;
  src: string;
  block: boolean;
  width?: number | string;
  height?: number | string;
  alt?: string;
  mode?: CSSProperties['objectFit'];
  props?: HTMLAttributes<HTMLImageElement>;
  style?: CSSProperties;
}

const Image = ({
  lazy,
  threshold,
  placeholder,
  src,
  block,
  width = '100%',
  height = '100%',
  alt,
  mode,
  ...props
}: ImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const imageStyle = {
    display: block ? 'block' : undefined,
    width,
    height,
    objectFit: mode,
  };

  useEffect(() => {
    if (!lazy) {
      setLoaded(true);
      return;
    }

    const handleLoadImage = () => setLoaded(true);

    const imgElement = imgRef.current;

    imgElement &&
      imgElement.addEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);

    return () => {
      imgElement &&
        imgElement.removeEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);
    };
  }, [lazy]);

  useEffect(() => {
    if (!lazy) return;

    observer = new IntersectionObserver(onIntersection, { threshold });

    imgRef.current && observer.observe(imgRef.current);
  }, [lazy, threshold]);

  return (
    <img
      ref={imgRef}
      src={loaded ? src : placeholder}
      alt={alt}
      style={{ opacity: loaded ? 1 : 0, ...props.style, ...imageStyle }}
    />
  );
};

export default Image;
