import React from 'react';

import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Code } from '../../src/index';

export default class DocsPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Tabs</h1>
        <hr />
        <h4>Import</h4>
        <Code>
          {
            `// Import component (and relevant CSS)
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Code } from '../../src/index';`
          }
        </Code>
        <hr />
        <h4>Use</h4>
        <Code>
          {
            `<Nav tabs>
  <NavItem>
    <NavLink
      className={this.state.activeTab === '1' ? 'active' : ''}
      onClick={() => { this.toggle('1'); }}
    >
      Tab1
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink
      className={this.state.activeTab === '2' ? 'active' : ''}
      onClick={() => { this.toggle('2'); }}
    >
      Moar Tabs
    </NavLink>
  </NavItem>
</Nav>
<TabContent activeTab={this.state.activeTab}>
  <TabPane tabId="1">
    <Row>
      <Col sm="12">
        <h4>Tab 1 Contents</h4>
      </Col>
    </Row>
  </TabPane>
  <TabPane tabId="2">
    <Row>
      <Col sm="6">
        <Card block>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card block>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row>
  </TabPane>
</TabContent>`
          }
        </Code>
        <br />
        <Nav tabs>
          <NavItem>
            <NavLink
              className={this.state.activeTab === '1' ? 'active' : ''}
              onClick={() => { this.toggle('1'); }}
            >
              Tab1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={this.state.activeTab === '2' ? 'active' : ''}
              onClick={() => { this.toggle('2'); }}
            >
              Moar Tabs
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card block>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card block>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
