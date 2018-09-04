import React from 'react';

import { Row, Col, Code, CircularProgressBar } from '@nio/ui-kit';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Circular Progress Bar</h1>
        <hr />
        <h4>Import</h4>
        <Code>
          {
            `// Import component (and relevant CSS)
import { CircularProgressBar } from '@nio/ui-kit';`
          }
        </Code>
        <hr />
        <h4>Use</h4>
        <br />
        <Row>
          <Col xs="12" sm="6" lg="3" className="text-center mb-4">
            <CircularProgressBar
              percentage={20}
            />
            <br />
            <br />
            <Code>
              {
                `<CircularProgressBar
  percentage={20}
/>


`
              }
            </Code>
          </Col>
          <Col xs="12" sm="6" lg="3" className="text-center mb-4">
            <CircularProgressBar
              percentage={20}
              label="Custom Label"
            />
            <br />
            <br />
            <Code>
              {
                `<CircularProgressBar
  percentage={20}
  label="Custom Label"
/>

`
              }
            </Code>
          </Col>
          <Col xs="12" sm="6" lg="3" className="text-center mb-4">
            <CircularProgressBar
              percentage={20}
              label="No Animation"
              initialAnimation={false}
            />
            <br />
            <br />
            <Code>
              {
                `<CircularProgressBar
  percentage={20}
  label="No Animation"
  initialAnimation={false}
/>`
              }
            </Code>
          </Col>
          <Col xs="12" sm="6" lg="3" className="text-center mb-4">
            <CircularProgressBar
              percentage={20}
              label="Counter Clockwise"
              counterClockwise
            />
            <br />
            <br />
            <Code>
              {
                `<CircularProgressBar
  percentage={20}
  label="Counter Clockwise"
  counterClockwise
/>`
              }
            </Code>
          </Col>
        </Row>
        <hr />
        <h4>Color</h4>
        <br />
        <Row>
          <Col xs="12" sm="6" lg="3" className="text-center mb-4">
            <CircularProgressBar
              percentage={20}
              color="success"
              label="Success"
            />
            <br />
            <br />
            <Code>
              {
                `<CircularProgressBar
  percentage={20}
  color="success"
  label="Success"
/>`
              }
            </Code>
          </Col>
          <Col xs="12" sm="6" lg="3" className="text-center mb-4">
            <CircularProgressBar
              percentage={20}
              color="warning"
              label="Warning"
            />
            <br />
            <br />
            <Code>
              {
                `<CircularProgressBar
  percentage={20}
  color="warning"
  label="Warning"
/>`
              }
            </Code>
          </Col>
          <Col xs="12" sm="6" lg="3" className="text-center mb-4">
            <CircularProgressBar
              percentage={20}
              color="danger"
              label="Danger"
            />
            <br />
            <br />
            <Code>
              {
                `<CircularProgressBar
  percentage={20}
  color="danger"
  label="Danger"
/>`
              }
            </Code>
          </Col>
        </Row>
        <hr />
        <h4>Thickness</h4>
        <br />
        <Row>
          <Col xs="12" sm="6" lg="3" className="text-center mb-4">
            <CircularProgressBar
              strokeWidth={2}
              percentage={20}
              label="Thin"
            />
            <br />
            <br />
            <Code>
              {
                `<CircularProgressBar
  strokeWidth={2}
  percentage={20}
  label="Thin"
/>`
              }
            </Code>
          </Col>
          <Col xs="12" sm="6" lg="3" className="text-center mb-4">
            <CircularProgressBar
              strokeWidth={6}
              percentage={20}
              label="Standard"
            />
            <br />
            <br />
            <Code>
              {
                `<CircularProgressBar
  strokeWidth={6}
  percentage={20}
  label="Standard"
/>`
              }
            </Code>
          </Col>
          <Col xs="12" sm="6" lg="3" className="text-center mb-4">
            <CircularProgressBar
              strokeWidth={10}
              percentage={20}
              label="Bold"
            />
            <br />
            <br />
            <Code>
              {
                `<CircularProgressBar
  strokeWidth={10}
  percentage={20}
  label="Bold"
/>`
              }
            </Code>
          </Col>
          <Col xs="12" sm="6" lg="3" className="text-center mb-4">
            <CircularProgressBar
              strokeWidth={15}
              percentage={20}
              label="Fat"
            />
            <br />
            <br />
            <Code>
              {
                `<CircularProgressBar
  strokeWidth={15}
  percentage={20}
  label="Fat"
/>`
              }
            </Code>
          </Col>
        </Row>
      </div>
    );
  }
}
