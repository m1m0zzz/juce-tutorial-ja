import useBaseUrl from "@docusaurus/useBaseUrl";

interface Props {
  src: string;
  caption: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
}

export default function CaptionImage({
  src,
  caption,
  alt,
  width,
  height,
}: Props) {
  const imgSrc = useBaseUrl(src);

  return (
    <figure>
      <img src={imgSrc} alt={alt || caption} width={width} height={height} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
