import { useState, useEffect } from 'react';
import { usePrism } from 'next-prism';

import 'next-prism/themes/tomorrow.css';

import 'next-prism/plugins/show-invisibles/show-invisibles.css';
import 'next-prism/plugins/show-invisibles/show-invisibles';

function App() {
  const [count, setCount] = useState(0);
  const { Code, highlightAll } = usePrism();

  useEffect(() => {
    highlightAll();
  }, [count]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>You clicked {count} times</p>
      <Code language='javascript'>
        {`<p>You clicked ${count} times<p>`}
      </Code>
    </>
  );
}

export default App;
