import React from 'react';

import { BarGraph, Code } from '../../src/index';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Bar Graph</h1>
        <hr />
        <h4>Import</h4>
        <Code>
          {
            `// Import component (and relevant CSS)
import { BarGraph } from '@nio/ui-kit';`
          }
        </Code>
        <hr />
        <h4>Use</h4>
        <Code>
          {
            `const data =[
  { label: 'Cat 1', value: 214 },
  { label: 'Cat 2', value: 839 },
  { label: 'Cat 3', value: 445 },
  { label: 'Cat 4', value: 628 },
  { label: 'Cat 5', value: 740 },
  { label: 'Cat 6', value: 112 },
  { label: 'Cat 7', value: 72 },
  { label: 'Cat 8', value: 1034 },
  { label: 'Cat 9', value: 289 },
]
<BarGraph data={data} />`
          }
        </Code>
        <br />
        <BarGraph
          width={500}
          height={500}
          data={[
            { label: 'Cat 1', value: 214 },
            { label: 'Cat 2', value: 839 },
            { label: 'Cat 3', value: 445 },
            { label: 'Cat 4', value: 628 },
            { label: 'Cat 5', value: 740 },
            { label: 'Cat 6', value: 112 },
            { label: 'Cat 7', value: 72 },
            { label: 'Cat 8', value: 1034 },
            { label: 'Cat 9', value: 289 },
          ]}
        />
      </div>
    );
  }
}
