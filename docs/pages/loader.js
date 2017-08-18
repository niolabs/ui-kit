import React from 'react';

import { Col, Row, Card, Loader, Code } from '../../src/index';

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
            <Card>
              <Loader />
              <br /><br /><br /><br />
            </Card>
          </Col>
          <Col xs="12" md="6" xl="3" className="mb-3">
            <Code>
              {
                '<Loader color="success" />'
              }
            </Code>
            <Card>
              <Loader color="success" />
              <br /><br /><br /><br />
            </Card>
          </Col>
          <Col xs="12" md="6" xl="3" className="mb-3">
            <Code>
              {
                '<Loader color="warning" />'
              }
            </Code>
            <Card>
              <Loader color="warning" />
              <br /><br /><br /><br />
            </Card>
          </Col>
          <Col xs="12" md="6" xl="3" className="mb-3">
            <Code>
              {
                '<Loader color="danger" />'
              }
            </Code>
            <Card>
              <Loader color="danger" />
              <br /><br /><br /><br />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
