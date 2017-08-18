import React from 'react';
import { VictoryPie, Col, Row, Code } from '../../src/index';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Pie Chart</h1>
        <hr />
        <h4>Import</h4>
        <Code>
          {
            `// Import component (and relevant CSS)
import { VictoryChart, VictoryPie, Code } from '../../src/index';`
          }
        </Code>
        <hr />
        <h4>Use</h4>
        <Code>
          {
            `<VictoryPie
  data={[
    { x: 'Cats', y: 35 },
    { x: 'Dogs', y: 40 },
    { x: 'Birds', y: 55 },
  ]}
/>`
          }
        </Code>
        <br />
        <Row>
          <Col sm="6" md="4" lg="3">
            <VictoryPie
              data={[
                { x: 'Cats', y: 35 },
                { x: 'Dogs', y: 40 },
                { x: 'Birds', y: 55 },
              ]}
            />
          </Col>
        </Row>
        <hr />
        <h4>Radius &amp; Spacing</h4>
        <Code>
          {
            `<VictoryPie
  padAngle={1}
  innerRadius={100}
  startAngle={90}
  endAngle={-90}
  labels={d => \`&#36{d.x}: &#36{d.y}\`}
  data={[
    { x: 'Cats', y: 35 },
    { x: 'Dogs', y: 40 },
    { x: 'Birds', y: 55 },
  ]}
/>`
          }
        </Code>
        <br />
        <Row>
          <Col sm="6" md="4" lg="3">
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
        </Row>
      </div>
    );
  }
}
