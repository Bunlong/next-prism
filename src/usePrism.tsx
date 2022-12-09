import React from 'react';
import Prism from 'prismjs';

export interface ICode {
  language?: string;
  children?: any;
  content?: any;
}

function useCodeComponent() {
  const CodeComponent = ({ language, children, content }: ICode) => {
    React.useEffect(() => {
      Prism.highlightAll();
    }, []);

    return (
      <pre>
        <code className={`language-${language}`}>{children || content}</code>
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
