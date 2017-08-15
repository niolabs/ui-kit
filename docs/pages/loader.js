import React from 'react';

import { Col, Row, Card, Loader } from '../../src/index';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Loader</h1>
        <hr />
        <h4>Import</h4>
        <code>
          {
            `// Import with local scoped class names (via CSS Modules)
import { Loader } from '@nio/ui-kit';`
          }
        </code>
        <hr />
        <h4>Use</h4>
        <br />
        <Row>
          <Col xs="12" md="6" xl="3" className="mb-3">
            <code>
              {
                '<Loader />'
              }
            </code>
            <Card>
              <Loader />
              <br /><br /><br /><br />
            </Card>
          </Col>
          <Col xs="12" md="6" xl="3" className="mb-3">
            <code>
              {
                '<Loader color="success" />'
              }
            </code>
            <Card>
              <Loader color="success" />
              <br /><br /><br /><br />
            </Card>
          </Col>
          <Col xs="12" md="6" xl="3" className="mb-3">
            <code>
              {
                '<Loader color="warning" />'
              }
            </code>
            <Card>
              <Loader color="warning" />
              <br /><br /><br /><br />
            </Card>
          </Col>
          <Col xs="12" md="6" xl="3" className="mb-3">
            <code>
              {
                '<Loader color="danger" />'
              }
            </code>
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
