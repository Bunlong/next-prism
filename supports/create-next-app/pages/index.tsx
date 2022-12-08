import { usePrism } from 'next-prism'

import 'next-prism/themes/twilight.css'

export default function Home() {
  const { Code } = usePrism()

  return (
    <>
      <Code language='javascript'>
      {`<div className="example">
  {Math.random()}
</div>`}
      </Code>
    </>
  )
}
