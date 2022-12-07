import React from 'react';
import Prism from 'prismjs';

export interface ICode {
  code: any;
  language?: string;
}

function useCodeComponent() {
  const CodeComponent = ({ code, language }: ICode) => {
    React.useEffect(() => {
      Prism.highlightAll();
    }, []);

    return (
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    );
  };

  const Code = React.useMemo(() => CodeComponent, []);

  return Code;
}

export function usePrism() {
  const Code = useCodeComponent();

  return {
    Code,
  };
}
