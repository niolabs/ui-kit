import React from 'react';

import { Card, CardBlock, CardText, CardTitle, Button } from '../../src/index';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Card</h1>
        <hr />
        <h4>Import</h4>
        <code>
          {
            `// Import component (and relevant CSS)
import { Card, CardBlock, CardFooter, CardHeader, CardText, CardTitle, Button } from '@nio/ui-kit';`
          }
        </code>
        <hr />
        <h4>Use</h4>
        <code>
          {
            `<Card>
  <CardBlock>
    <CardTitle>Card Section 1</CardTitle>
    <CardText>
      With supporting text below as a natural lead-in to additional content.
    </CardText>
    <Button>Action 1</Button>
  </CardBlock>
  <hr className="dashed" />
  <CardBlock>
    <CardTitle>Card Section 2</CardTitle>
    <CardText>
      With supporting text below as a natural lead-in to additional content.
    </CardText>
    <Button>Action 2</Button>
  </CardBlock>
</Card>`
          }
        </code>
        <br />
        <Card>
          <CardBlock>
            <CardTitle>Card Section 1</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button>Action 1</Button>
          </CardBlock>
          <hr className="dashed" />
          <CardBlock>
            <CardTitle>Card Section 2</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button>Action 2</Button>
          </CardBlock>
        </Card>
        <hr />
        <h4>Inverse Theme</h4>
        <code>
          {
            `<Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
  <CardBlock>
    <CardTitle>Card Section 1</CardTitle>
    <CardText>
      With supporting text below as a natural lead-in to additional content.
    </CardText>
    <Button>Action 1</Button>
  </CardBlock>
  <hr className="dashed" />
  <CardBlock>
    <CardTitle>Card Section 2</CardTitle>
    <CardText>
      With supporting text below as a natural lead-in to additional content.
    </CardText>
    <Button>Action 2</Button>
  </CardBlock>
</Card>`
          }
        </code>
        <br />
        <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardBlock>
            <CardTitle>Card Section 1</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button>Action 1</Button>
          </CardBlock>
          <hr className="dashed" />
          <CardBlock>
            <CardTitle>Card Section 2</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button>Action 2</Button>
          </CardBlock>
        </Card>
      </div>
    );
  }
}
