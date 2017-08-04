import React from 'react';
import { VictoryPie, Container, Col, Row } from '../../src/index';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Pie Chart</h1>
        <hr />
        <h4>Import</h4>
        <code>
          {
            `// Import with local scoped class names (via CSS Modules)
import { VictoryChart, VictoryPie } from '@nio/ui-kit';`
          }
        </code>
        <hr />
        <h4>Use</h4>
        <code>
          {
            `<VictoryPie
  padAngle={1}
  data={[
    { x: "Cats", y: 35 },
    { x: "Dogs", y: 40 },
    { x: "Birds", y: 55 }
  ]}
/>`
          }
        </code>
        <br />
        <Container>
          <Row>
            <Col xs="12" sm="6" lg="4">
              <VictoryPie
                padAngle={1}
                innerRadius={100}
                startAngle={90}
                endAngle={-90}
                labels={d => `${d.x}: ${d.y}`}
                data={[
                  { x: 'Cats', y: 35 },
                  { x: 'Dogs', y: 40 },
                  { x: 'Birds', y: 55 },
                ]}
              />
            </Col>
            <Col xs="12" sm="6" lg="4">
              <VictoryPie
                data={[
                  { x: 'Cats', y: 35 },
                  { x: 'Dogs', y: 40 },
                  { x: 'Birds', y: 55 },
                ]}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
