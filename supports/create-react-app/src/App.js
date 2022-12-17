import { usePrism } from 'next-prism';

import 'next-prism/themes/tomorrow.css';

import 'next-prism/plugins/autolinker/autolinker';
import 'next-prism/plugins/autolinker/autolinker.css';

function App() {
  const { Code } = usePrism();

  return (
    <Code language="javascript">
      {`<div className="example">
  <a href="https://github.com/Bunlong/next-prism">next-prism</a>
</div>`}
    </Code>
  );
}

export default App;
