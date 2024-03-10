interface Props {
  path: string;
}

export default function SourcePageLink({ path }: Props): JSX.Element {
  return (
    <p><a href={`https://docs.juce.com/master/${path}.html`}>📚 Source Page</a></p>
  );
}
