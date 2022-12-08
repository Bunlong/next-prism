import React from 'react';
import Prism from 'prismjs';

export interface ICode {
  children: any;
  language?: string;
}

function useCodeComponent() {
  const CodeComponent = ({ children, language }: ICode) => {
    React.useEffect(() => {
      Prism.highlightAll();
    }, []);

    return (
      <pre>
        <code className={`language-${language}`}>{children}</code>
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
