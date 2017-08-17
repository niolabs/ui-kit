import React from 'react';
import { Container, Col, Row, VictoryBar, VictoryChart, VictoryAxis } from '../../src/index';

export default class DocsPage extends React.Component {
  render() {
    const data = [
      { quarter: 1, earnings: 13000 },
      { quarter: 2, earnings: 16500 },
      { quarter: 3, earnings: 14250 },
      { quarter: 4, earnings: 19000 },
    ];

    return (
      <div>
        <h1>Bar Chart</h1>
        <hr />
        <h4>Import</h4>
        <code>
          {
            `// Import component (and relevant CSS)
import { VictoryChart, VictoryBar } from '../../src/index';`
          }
        </code>
        <hr />
        <h4>Use</h4>
        <code>
          {
            `<VictoryChart
  domainPadding={20}
>
  <VictoryBar
    data={data}
    x="quarter"
    y="earnings"
  />
</VictoryChart>`
          }
        </code>
        <br />
        <Container>
          <Row>
            <Col xs="12" sm="6" lg="4">
              <VictoryChart
                domainPadding={20}
              >
                <VictoryAxis
                  tickValues={[1, 2, 3, 4]}
                  tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}
                />
                <VictoryAxis
                  dependentAxis
                  tickFormat={x => (`$${x / 1000}k`)}
                />
                <VictoryBar
                  data={data}
                  x="quarter"
                  y="earnings"
                />
              </VictoryChart>
            </Col>
            <Col xs="12" sm="6" lg="4">
              <VictoryChart
                domainPadding={20}
              >
                <VictoryAxis
                  tickValues={[1, 2, 3, 4]}
                  tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}
                />
                <VictoryAxis
                  dependentAxis
                  tickFormat={x => (`$${x / 1000}k`)}
                />
                <VictoryBar
                  data={data}
                  x="quarter"
                  y="earnings"
                />
              </VictoryChart>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
