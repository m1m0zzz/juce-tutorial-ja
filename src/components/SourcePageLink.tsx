interface Props {
  path: string;
}

export default function SourcePageLink({ path }: Props) {
  return (
    <a
      className="sourcePageLink"
      href={`https://docs.juce.com/master/${path}.html`}
      target="_blank"
      rel="noopener noreferrer"
    >
      📚 Source Page
    </a>
  );
}
