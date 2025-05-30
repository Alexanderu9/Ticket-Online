import styles from './atoms.module.css';

type ImageFilmeProps = {
  size: 'sm' | 'md' | 'lg';
  src: string;
  alt?: string;
};

function ImageFilme({ size, src, alt = '' }: ImageFilmeProps) {
  return (
    <img 
      className={styles[`size-${size}`]} 
      src={src}
      alt={alt}
    />
  );
}

export default ImageFilme;
