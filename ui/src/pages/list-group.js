import React from 'react';

import { ListGroup, ListGroupItem, Code } from '@nio/ui-kit';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>List Group</h1>
        <hr />
        <h4>Import</h4>
        <Code>
          {
            `// Import component (and relevant CSS)
import { ListGroup, ListGroupItem } from '@nio/ui-kit';`
          }
        </Code>
        <hr />
        <h4>Use</h4>
        <Code>
          {
            `<ListGroup>
  <ListGroupItem>Cras justo odio</ListGroupItem>
  <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
  <ListGroupItem>Morbi leo risus</ListGroupItem>
  <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
  <ListGroupItem>Vestibulum at eros</ListGroupItem>
</ListGroup>`
          }
        </Code>
        <br />
        <ListGroup>
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Morbi leo risus</ListGroupItem>
          <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
