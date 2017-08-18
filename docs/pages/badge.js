import React from 'react';

import { Badge, Code } from '../../src/index';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Badge</h1>
        <hr />
        <h4>Import</h4>
        <Code>
          {
            `// Import component (and relevant CSS)
import { Badge } from '@nio/ui-kit';`
          }
        </Code>
        <hr />
        <h4>Use</h4>
        <Code>
          {
            `<h1>Heading <Badge>New</Badge></h1>
<h2>Heading <Badge>New</Badge></h2>
<h3>Heading <Badge>New</Badge></h3>
<h4>Heading <Badge>New</Badge></h4>
<h5>Heading <Badge>New</Badge></h5>
<h6>Heading <Badge>New</Badge></h6>`
          }
        </Code>
        <br />
        <h1>Heading <Badge>New</Badge></h1>
        <h2>Heading <Badge>New</Badge></h2>
        <h3>Heading <Badge>New</Badge></h3>
        <h4>Heading <Badge>New</Badge></h4>
        <h5>Heading <Badge>New</Badge></h5>
        <h6>Heading <Badge>New</Badge></h6>
        <hr />
        <h4>Colors</h4>
        <Code>
          {
            `<Badge>default</Badge>{' '}
<Badge color="primary">primary</Badge>{' '}
<Badge color="success">success</Badge>{' '}
<Badge color="info">info</Badge>{' '}
<Badge color="warning">warning</Badge>{' '}
<Badge color="danger">danger</Badge>`
          }
        </Code>
        <br />
        <Badge>default</Badge>{' '}
        <Badge color="primary">primary</Badge>{' '}
        <Badge color="success">success</Badge>{' '}
        <Badge color="info">info</Badge>{' '}
        <Badge color="warning">warning</Badge>{' '}
        <Badge color="danger">danger</Badge>
        <hr />
        <h4>Pills</h4>
        <Code>
          {
            `<Badge color="default" pill>default</Badge>{' '}
<Badge color="primary" pill>primary</Badge>{' '}
<Badge color="success" pill>success</Badge>{' '}
<Badge color="info" pill>info</Badge>{' '}
<Badge color="warning" pill>warning</Badge>{' '}
<Badge color="danger" pill>danger</Badge>`
          }
        </Code>
        <br />
        <Badge color="default" pill>default</Badge>{' '}
        <Badge color="primary" pill>primary</Badge>{' '}
        <Badge color="success" pill>success</Badge>{' '}
        <Badge color="info" pill>info</Badge>{' '}
        <Badge color="warning" pill>warning</Badge>{' '}
        <Badge color="danger" pill>danger</Badge>
      </div>
    );
  }
}
