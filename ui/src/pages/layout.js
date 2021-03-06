import React from 'react';

import { Container, Row, Col, Code } from '@nio/ui-kit';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Grid</h1>
        <hr />
        <h4>Import</h4>
        <Code>
          {
            `// Import component (and relevant CSS)
import { Container, Row, Col } from '@nio/ui-kit';`
          }
        </Code>
        <hr />
        <h4>Use</h4>
        <Code>
          {
            `<Container>
  <Row className="text-white">
    <Col className="bg-primary" xs="12" sm="6" md="5" lg="4" xl="3">1</Col>
    <Col className="bg-success" xs="12" sm="6" md="5" lg="4" xl="3">2</Col>
    <Col className="bg-info" xs="12" sm="6" md="5" lg="4" xl="3">3</Col>
    <Col className="bg-warning" xs="12" sm="6" md="5" lg="4" xl="3">4</Col>
    <Col className="bg-danger" xs="12" sm="6" md="5" lg="4" xl="3">5</Col>
    <Col className="bg-inverse" xs="12" sm="6" md="5" lg="4" xl="3">6</Col>
    <Col className="bg-inverse" xs="12" sm="6" md="5" lg="4" xl="3">7</Col>
    <Col className="bg-danger" xs="12" sm="6" md="5" lg="4" xl="3">8</Col>
    <Col className="bg-warning" xs="12" sm="6" md="5" lg="4" xl="3">9</Col>
    <Col className="bg-info" xs="12" sm="6" md="5" lg="4" xl="3">10</Col>
    <Col className="bg-success" xs="12" sm="6" md="5" lg="4" xl="3">11</Col>
    <Col className="bg-primary" xs="12" sm="6" md="5" lg="4" xl="3">12</Col>
  </Row>
</Container>`
          }
        </Code>
        <br />
        <Container>
          <Row className="text-white">
            <Col className="bg-primary" xs="12" sm="6" md="5" lg="4" xl="3">1</Col>
            <Col className="bg-success" xs="12" sm="6" md="5" lg="4" xl="3">2</Col>
            <Col className="bg-info" xs="12" sm="6" md="5" lg="4" xl="3">3</Col>
            <Col className="bg-warning" xs="12" sm="6" md="5" lg="4" xl="3">4</Col>
            <Col className="bg-danger" xs="12" sm="6" md="5" lg="4" xl="3">5</Col>
            <Col className="bg-inverse" xs="12" sm="6" md="5" lg="4" xl="3">6</Col>
            <Col className="bg-inverse" xs="12" sm="6" md="5" lg="4" xl="3">7</Col>
            <Col className="bg-danger" xs="12" sm="6" md="5" lg="4" xl="3">8</Col>
            <Col className="bg-warning" xs="12" sm="6" md="5" lg="4" xl="3">9</Col>
            <Col className="bg-info" xs="12" sm="6" md="5" lg="4" xl="3">10</Col>
            <Col className="bg-success" xs="12" sm="6" md="5" lg="4" xl="3">11</Col>
            <Col className="bg-primary" xs="12" sm="6" md="5" lg="4" xl="3">12</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
