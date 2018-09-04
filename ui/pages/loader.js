import React from 'react';

import { Col, Row, Card, Loader, Code } from '@nio/ui-kit';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Loader</h1>
        <hr />
        <h4>Import</h4>
        <Code>
          {
            `// Import component (and relevant CSS)
import { Loader } from '@nio/ui-kit';`
          }
        </Code>
        <hr />
        <h4>Use</h4>
        <br />
        <Row>
          <Col xs="12" md="6" xl="3" className="mb-3">
            <Code>
              {
                '<Loader />'
              }
            </Code>
            <Card className="p-3">
              <Loader />
              <br />
              <br />
              <br />
              <br />
            </Card>
          </Col>
          <Col xs="12" md="6" xl="3" className="mb-3">
            <Code>
              {
                '<Loader color="success" />'
              }
            </Code>
            <Card className="p-3">
              <Loader color="success" />
              <br />
              <br />
              <br />
              <br />
            </Card>
          </Col>
          <Col xs="12" md="6" xl="3" className="mb-3">
            <Code>
              {
                '<Loader color="warning" />'
              }
            </Code>
            <Card className="p-3">
              <Loader color="warning" />
              <br />
              <br />
              <br />
              <br />
            </Card>
          </Col>
          <Col xs="12" md="6" xl="3" className="mb-3">
            <Code>
              {
                '<Loader color="danger" />'
              }
            </Code>
            <Card className="p-3">
              <Loader color="danger" />
              <br />
              <br />
              <br />
              <br />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
