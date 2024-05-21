import clsx from 'clsx';

export default function ImagePreview({ src, alt, className }) {
  return (
    <>
      <img className={clsx('mx-auto cursor-pointer rounded-md transition hover:brightness-75', className)} src={src} alt={alt} title={alt}  />
    </>
  );
}
