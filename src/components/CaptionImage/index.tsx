import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./styles.module.css";

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
      <img
        src={imgSrc}
        alt={alt || caption}
        width={width}
        height={height}
        className={styles.image}
      />
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  );
}
