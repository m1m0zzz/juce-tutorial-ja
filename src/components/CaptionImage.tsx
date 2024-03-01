interface Props {
  src: string;
  caption: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
}

export default function CaptionImage({ src, caption, alt, width, height }: Props): JSX.Element {
  return (
    <figure>
      <img src={src} alt={alt || caption} width={width} height={height} />
      <figcaption><b>{caption}</b></figcaption>
    </figure>
  );
}
