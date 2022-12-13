import { usePrism } from 'next-prism';

import 'next-prism/themes/twilight.css';

import 'next-prism/plugins/line-numbers/line-numbers';
import 'next-prism/plugins/line-numbers/line-numbers.css';

function App() {
  const { Code } = usePrism();

  return (
    <>
      <Code language='javascript' lineNumbers={true}>
      {`<div className="example">
  {Math.random()}
</div>`}
      </Code>
    </>
  );
}

export default App;
