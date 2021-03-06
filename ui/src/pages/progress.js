import React from 'react';

import { Progress, Code } from '@nio/ui-kit';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Progress</h1>
        <hr />
        <h4>Import</h4>
        <Code>
          {
            `// Import component (and relevant CSS)
import { Progress } from '@nio/ui-kit';`
          }
        </Code>
        <hr />
        <h4>Use</h4>
        <Code>
          {
            `<div className="text-center">0%</div>
<Progress />
<div className="text-center">25%</div>
<Progress value="25" />
<div className="text-center">50%</div>
<Progress value={50} />
<div className="text-center">75%</div>
<Progress value={75} />
<div className="text-center">100%</div>
<Progress value="100" />
<div className="text-center">Multiple bars</div>
<Progress multi>
  <Progress bar value="15" />
  <Progress bar color="success" value="30" />
  <Progress bar color="info" value="25" />
  <Progress bar color="warning" value="20" />
  <Progress bar color="danger" value="5" />
</Progress>`
          }
        </Code>
        <br />
        <div className="text-center">0%</div>
        <Progress />
        <br />
        <div className="text-center">25%</div>
        <Progress value="25" />
        <br />
        <div className="text-center">50%</div>
        <Progress value={50} />
        <br />
        <div className="text-center">75%</div>
        <Progress value={75} />
        <br />
        <div className="text-center">100%</div>
        <Progress value="100" />
        <br />
        <div className="text-center">Multiple bars</div>
        <Progress multi>
          <Progress bar value="15" />
          <Progress bar color="success" value="30" />
          <Progress bar color="info" value="25" />
          <Progress bar color="warning" value="20" />
          <Progress bar color="danger" value="5" />
        </Progress>
      </div>
    );
  }
}
