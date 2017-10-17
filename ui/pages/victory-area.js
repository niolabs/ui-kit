import React from 'react';
import { Container, Col, Row, VictoryArea, VictoryChart, Code } from '../../src/index';

export default class DocsPage extends React.Component {
  render() {
    const data = [
      { x: 1, y: 2, y0: 0 },
      { x: 2, y: 3, y0: 1 },
      { x: 3, y: 5, y0: 1 },
      { x: 4, y: 4, y0: 2 },
      { x: 5, y: 6, y0: 2 },
    ];

    return (
      <div>
        <h1>Bar Chart</h1>
        <hr />
        <h4>Import</h4>
        <Code>
          {
            `// Import component (and relevant CSS)
import { VictoryArea, VictoryChart, Code } from '@nio/ui-kit';`
          }
        </Code>
        <hr />
        <h4>Use</h4>
        <Code>
          {
            `<VictoryChart>
  <VictoryArea
    data={[
      { x: 1, y: 2, y0: 0 },
      { x: 2, y: 3, y0: 1 },
      { x: 3, y: 5, y0: 1 },
      { x: 4, y: 4, y0: 2 },
      { x: 5, y: 6, y0: 2 }
    ]}
  />
</VictoryChart>`
          }
        </Code>
        <br />
        <Container>
          <Row>
            <Col xs="12" sm="6" lg="4">
              <VictoryChart>
                <VictoryArea
                  data={data}
                />
              </VictoryChart>
            </Col>
            <Col xs="12" sm="6" lg="4">
              <VictoryChart>
                <VictoryArea
                  data={data}
                />
              </VictoryChart>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
