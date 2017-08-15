import React from 'react';

import { ToggleButton, Col, Row, Card } from '../../src/index';

export const Check = () => (
  <svg width="14" height="10" viewBox="0 0 14 11" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0" fill="#fff" fillRule="evenodd" />
  </svg>
);

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
        <code>
          {
            `// Import with local scoped class names (via CSS Modules)
import { ToggleButton } from '@nio/ui-kit';`
          }
        </code>
        <hr />
        <h4>Use</h4>
        <Row>
          <Col xs="12" className="mb-3">
            <code>
              {
                `<ToggleButton
  value={this.state.value1 || false}
  onToggle={this.setState({ value1: !this.state.value1 })}
/>`
              }
            </code>
            <Card className="p-5">
              <ToggleButton
                value={this.state.value1 || false}
                onToggle={value => this.setState({ value1: !value })}
              />
            </Card>
          </Col>
          <Col xs="12" className="mb-3">
            <code>
              {
                `<ToggleButton
  inactiveLabel={<X />}
  activeLabel={<Check />}
  value={this.state.value2}
  onToggle={this.setState({ value1: !this.state.value2 })}
/>`
              }
            </code>
            <Card className="p-5">
              <ToggleButton
                inactiveLabel={<X />}
                activeLabel={<Check />}
                value={this.state.value2}
                onToggle={value => this.setState({ value2: !value })}
              />
            </Card>
          </Col>
          <Col xs="12" className="mb-3">
            <code>
              {
                `<ToggleButton
  value={this.state.value3}
  inactiveLabel={''}
  activeLabel={''}
  trackStyle={{ height: 15, width: 100 }}
  thumbAnimateRange={[-10, 56]}
  thumbIcon={<ThumbIcon />}
  onToggle={this.setState({ value1: !this.state.value3 })}
/>`
              }
            </code>
            <Card className="p-5">
              <ToggleButton
                value={this.state.value3}
                inactiveLabel={''}
                activeLabel={''}
                trackStyle={{ height: 15, width: 100 }}
                thumbAnimateRange={[-10, 80]}
                thumbIcon={<ThumbIcon />}
                onToggle={value => this.setState({ value3: !value })}
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
