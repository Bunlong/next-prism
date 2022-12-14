import React from 'react';
import Prism from 'prismjs';

export interface ICode {
  language?: string;
  children?: any;
  content?: any;
  lineNumbers?: boolean;
}

function useCodeComponent() {
  const CodeComponent = ({
    language,
    children,
    content,
    lineNumbers,
  }: ICode) => {
    React.useEffect(() => {
      Prism.highlightAll();
    }, []);

    return (
      <pre>
        <code
          className={`language-${language} ${lineNumbers && 'line-numbers'} `}
        >
          {children || content}
        </code>
      </pre>
    );
  };

  const Code = React.useMemo(() => CodeComponent, []);

  return Code;
}

export function usePrism() {
  const Code = useCodeComponent();

  const highlightAll = () => {
    Prism.highlightAll();
  };

  return {
    Code,
    highlightAll,
  };
}
