import React from 'react';

import { ToggleButton, Col, Row, Card, Code } from '@nio/ui-kit';

export const ThumbIcon = () => (
  <div style={{
    position: 'absolute',
    top: 5.5,
    left: 8,
  }}
  >
    <svg width="14" height="10" viewBox="0 0 14 11" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0" fill="#37C0C9" fillRule="evenodd" />
    </svg>
  </div>
);

export const Check = () => (
  <svg width="14" height="10" viewBox="0 0 14 11" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0" fill="#fff" fillRule="evenodd" />
  </svg>
);

export const X = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12" fill="#fff" fillRule="evenodd" />
  </svg>
);

export default class DocsPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      value1: false,
      value2: false,
      value3: false,
      value4: false,
    };
  }

  toggle() {
    this.setState({
      togglestate: !this.state.togglestate,
    });
  }

  render() {
    return (
      <div>
        <h1>Toggle</h1>
        <hr />
        <h4>Import</h4>
        <Code>
          {
            `// Import component (and relevant CSS)
import { ToggleButton, Code } from '@nio/ui-kit';`
          }
        </Code>
        <hr />
        <h4>Use</h4>
        <Row>
          <Col xs="12" className="mb-3">
            <Code>
              {
                `<ToggleButton
  value={this.state.value1 || false}
  onToggle={value => this.setState({ value1: !this.state.value1 })}
/>`
              }
            </Code>
            <Card className="p-5">
              <ToggleButton
                value={this.state.value1}
                onToggle={value => this.setState({ value1: !value })}
              />
            </Card>
          </Col>
        </Row>
        <hr />
        <h4>Custom Labels Auto-Adjust Width</h4>
        <Row>
          <Col xs="12" className="mb-3">
            <Code>
              {
                `<ToggleButton
  inactiveLabel="monkeystuff"
  activeLabel="no"
  value={this.state.value2}
  onToggle={value => this.setState({ value2: !value })}
/><br />
<ToggleButton
  inactiveLabel="monkeystuff"
  activeLabel="donkeythings"
  value={this.state.value2}
  onToggle={value => this.setState({ value2: !value })}
/><br />
<ToggleButton
  inactiveLabel="omg this label is way too long"
  activeLabel="i got you, fam"
  value={this.state.value2}
  onToggle={value => this.setState({ value2: !value })}
/>`
              }
            </Code>
            <Card className="p-5">
              <ToggleButton
                inactiveLabel="monkeystuff"
                activeLabel="no"
                value={this.state.value2}
                onToggle={value => this.setState({ value2: !value })}
              /><br />
              <ToggleButton
                inactiveLabel="monkeystuff"
                activeLabel="donkeythings"
                value={this.state.value2}
                onToggle={value => this.setState({ value2: !value })}
              /><br />
              <ToggleButton
                inactiveLabel="omg this label is way too long"
                activeLabel="i got you, fam"
                value={this.state.value2}
                onToggle={value => this.setState({ value2: !value })}
              />
            </Card>
          </Col>
        </Row>
        <hr />
        <h4>Icons as Labels</h4>
        <Row>
          <Col xs="12" className="mb-3">
            <Code>
              {
                `<ToggleButton
  inactiveLabel={<X />}
  activeLabel={<Check />}
  value={this.state.value2}
  onToggle={value => this.setState({ value1: !this.state.value2 })}
/>`
              }
            </Code>
            <Card className="p-5">
              <ToggleButton
                inactiveLabel={<X />}
                activeLabel={<Check />}
                value={this.state.value3}
                onToggle={value => this.setState({ value3: !value })}
              />
            </Card>
          </Col>
        </Row>
        <hr />
        <h4>Mini Track, Custom Width</h4>
        <Row>
          <Col xs="12" className="mb-3">
            <Code>
              {
                `<ToggleButton
  mini
  width={100}
  value={this.state.value3}
  onToggle={value => this.setState({ value3: !value })}
/>`
              }
            </Code>
            <Card className="p-5">
              <ToggleButton
                mini
                thumbIcon={<ThumbIcon />}
                width={100}
                value={this.state.value4}
                onToggle={value => this.setState({ value4: !value })}
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
