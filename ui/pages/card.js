import React from 'react';

import { Card, CardBody, CardText, CardTitle, Button, Code } from '../../src/index';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Card</h1>
        <hr />
        <h4>Import</h4>
        <Code>
          {
            `// Import component (and relevant CSS)
import { Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, Button } from '@nio/ui-kit';`
          }
        </Code>
        <hr />
        <h4>Use</h4>
        <Code>
          {
            `<Card>
  <CardBody className="p-3">
    <CardTitle>Card Section 1</CardTitle>
    <CardText>
      With supporting text below as a natural lead-in to additional content.
    </CardText>
    <Button>Action 1</Button>
  </CardBody>
  <hr className="dashed" />
  <CardBody className="p-3">
    <CardTitle>Card Section 2</CardTitle>
    <CardText>
      With supporting text below as a natural lead-in to additional content.
    </CardText>
    <Button>Action 2</Button>
  </CardBody>
</Card>`
          }
        </Code>
        <br />
        <Card>
          <CardBody className="p-3">
            <CardTitle>Card Section 1</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button>Action 1</Button>
          </CardBody>
          <hr className="dashed" />
          <CardBody className="p-3">
            <CardTitle>Card Section 2</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button>Action 2</Button>
          </CardBody>
        </Card>
        <hr />
        <h4>Inverse Theme</h4>
        <Code>
          {
            `<Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
  <CardBody className="p-3">
    <CardTitle>Card Section 1</CardTitle>
    <CardText>
      With supporting text below as a natural lead-in to additional content.
    </CardText>
    <Button>Action 1</Button>
  </CardBody>
  <hr className="dashed" />
  <CardBody className="p-3">
    <CardTitle>Card Section 2</CardTitle>
    <CardText>
      With supporting text below as a natural lead-in to additional content.
    </CardText>
    <Button>Action 2</Button>
  </CardBody>
</Card>`
          }
        </Code>
        <br />
        <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardBody className="p-3">
            <CardTitle>Card Section 1</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button>Action 1</Button>
          </CardBody>
          <hr className="dashed" />
          <CardBody className="p-3">
            <CardTitle>Card Section 2</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button>Action 2</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
