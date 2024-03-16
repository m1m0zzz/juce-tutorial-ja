const toUrl = (ref: string) => {
  if (ref.includes("::")) {
    return "struct" + ref.replace("::", "_1_1");
  } else {
    return "class" + ref;
  }
}

export function ClassLink({ ref }: {
  ref: string
}): JSX.Element {
  return (
    <a href={`https://docs.juce.com/master/${toUrl(ref)}.html`}>{ref}</a>
  )
}

interface Props {
  refs: string[];
}

export default function ClassList({ refs }: Props): JSX.Element {
  return (
  <p>クラス：
    {
      refs.map((ref: string) => {
      return (
        <>
          <a href={`https://docs.juce.com/master/${toUrl(ref)}.html`}>{ref}</a>
          {", "}
        </>
      )
    })
    }
  </p>
  );
}
