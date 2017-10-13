import React from 'react';

import { Code } from '../../src/index';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Code</h1>
        <hr />
        <h4>Import</h4>
        <Code>
          {
            `// Import component (and relevant CSS)
import { Code } from '@nio/ui-kit';`
          }
        </Code>
        <hr />
        <h4>Use</h4>
        <Code>
          {
            `<Code>
  {
    \`render(){
      return (
        <Example Component />
      )
    }\`
  }
</Code>`}
        </Code>
        <br />
        <Code>
          {`render(){
  return (
  <ExampleComponent width={500} height={400} />
  )
}`}
        </Code>
      </div>
    );
  }
}
