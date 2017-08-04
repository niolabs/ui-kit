import React from 'react';
import { Container, Col, Row, VictoryBar, VictoryAxis } from '../../src/index';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Bar Chart</h1>
        <hr />
        <h4>Import</h4>
        <code>
          {
            `// Import with local scoped class names (via CSS Modules)
import { VictoryChart, VictoryBar } from '@nio/ui-kit';`
          }
        </code>
        <hr />
        <h4>Use</h4>
        <code>
          {
            `<VictoryBar
  data={[
    { x: "Cats", y: 35 },
    { x: "Dogs", y: 40 },
    { x: "Birds", y: 55 },
  ]}
/>`
          }
        </code>
        <br />
        <Container>
          <Row>
            <Col xs="12" sm="6" lg="4">
              <VictoryBar
                data={[
                  { x: 'Cats', y: 35 },
                  { x: 'Dogs', y: 40 },
                  { x: 'Birds', y: 55 },
                ]}
              />
              <VictoryAxis />
            </Col>
            <Col xs="12" sm="6" lg="4">
              <VictoryBar
                data={[
                  { x: 'Cats', y: 35 },
                  { x: 'Dogs', y: 40 },
                  { x: 'Birds', y: 55 },
                ]}
              />
              <VictoryAxis />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
