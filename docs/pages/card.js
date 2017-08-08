import React from 'react';

import { Card, CardBlock, CardFooter, CardHeader, CardText, CardTitle, Button } from '../../src/index';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Card</h1>
        <hr />
        <h4>Import</h4>
        <code>
          {
            `// Import with local scoped class names (via CSS Modules)
import { Card, CardBlock, CardFooter, CardHeader, CardText, CardTitle, Button } from '@nio/ui-kit';`
          }
        </code>
        <hr />
        <h4>Use</h4>
        <code>
          {
            `<Card>
  <CardHeader>Header</CardHeader>
  <CardBlock>
    <CardTitle>Special Title Treatment</CardTitle>
    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
    <Button>Go somewhere</Button>
  </CardBlock>
  <CardFooter>Footer</CardFooter>
</Card>
`
          }
        </code>
        <br />
        <Card>
          <CardHeader>Header</CardHeader>
          <CardBlock>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button>Go somewhere</Button>
          </CardBlock>
          <CardFooter>Footer</CardFooter>
        </Card>
        <hr />
        <h4>Inverse Theme</h4>
        <code>
          {
            `<Card block inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
  <CardTitle>Special Title Treatment</CardTitle>
  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
  <Button>Button</Button>
</Card>`
          }
        </code>
        <br />
        <Card block inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional content.
          </CardText>
          <Button>Button</Button>
        </Card>
      </div>
    );
  }
}
