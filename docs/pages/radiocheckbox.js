import React from 'react';

import { Row, Col, Card, RadioCheckbox } from '../../src/index';

export default class DocsPage extends React.Component {
  constructor(props) {
    super(props);
    this.options = [
      { label: 'Option 1', value: 'Option 1' },
      { label: 'Option 2', value: 'Option 2' },
      { label: 'Option 3', value: 'Option 3' },
      { label: 'Option 4', value: 'Option 4' },
      { label: 'Option 5', value: 'Option 5' },
    ];
    this.option = this.options[0];
    this.state = {
      valueRadio: false,
      valueCheckbox: false,
      valueRadioArray: false,
      valueCheckboxArray: false,
      valueRadioDefault: false,
      valueCheckboxDefault: false,
    };

    const fns = ['handleChangeRadio', 'handleChangeCheckbox', 'handleChangeRadioArray', 'handleChangeCheckboxArray', 'handleChangeRadioDefault', 'handleChangeCheckboxDefault'];
    fns.forEach((fn) => { this[fn] = this[fn].bind(this); });
  }

  handleChangeRadio(e) {
    this.setState({ valueRadio: e });
  }

  handleChangeCheckbox(e) {
    this.setState({ valueCheckbox: e });
  }

  handleChangeRadioArray(e) {
    this.setState({ valueRadioArray: e });
  }

  handleChangeCheckboxArray(e) {
    this.setState({ valueCheckboxArray: e });
  }

  handleChangeRadioDefault(e) {
    this.setState({ valueRadioDefault: e });
  }

  handleChangeCheckboxDefault(e) {
    this.setState({ valueCheckboxDefault: e });
  }

  render() {
    return (
      <div>
        <h1>RadioCheckbox</h1>
        <hr />
        <h4>Import</h4>
        <code>
          {
            `// Import component (and relevant CSS)
import { RadioCheckbox } from '@nio/ui-kit';`
          }
        </code>
        <hr />
        <Row>
          <Col xs="12" md="6" className="mb-3">
            <h4>Use Radio</h4>
            <code>
              {
                `<RadioCheckbox
  type="radio"
  onChange={this.handleChange}
  options={{label: 'Option 1', value: 'Option 1'}}
/>`
              }
            </code>
            <Card className="p-3">
              <RadioCheckbox
                type="radio"
                onChange={this.handleChangeRadio}
                options={{ label: 'Option 1', value: 'Option 1' }}
              /><br />
              Current Value: {JSON.stringify(this.state.valueRadio)}
            </Card>
          </Col>
          <Col xs="12" md="6" className="mb-3">
            <h4>Use Checkbox</h4>
            <code>
              {
                `<RadioCheckbox
  type="checkbox"
  onChange={this.handleChange}
  options={{label: 'Option 1', value: 'Option 1'}}
/>`
              }
            </code>
            <Card className="p-3">
              <RadioCheckbox
                type="checkbox"
                onChange={this.handleChangeCheckbox}
                options={{ label: 'Option 1', value: 'Option 1' }}
              /><br />
              Current Value: {JSON.stringify(this.state.valueCheckbox)}
            </Card>
          </Col>
        </Row>
        <hr />
        <h4>Array of Options</h4>
        <br />
        <Row>
          <Col xs="12" md="6" className="mb-3">
            <code>
              {
                `<RadioCheckbox
  type="radio"
  onChange={this.handleChange}
  options={[
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 2', value: 'Option 2' },
    { label: 'Option 3', value: 'Option 3' },
    { label: 'Option 4', value: 'Option 4' },
    { label: 'Option 5', value: 'Option 5' },
  ]}
/>`
              }
            </code>
            <Card className="p-3">
              <RadioCheckbox
                type="radio"
                onChange={this.handleChangeRadioArray}
                options={[
                  { label: 'Option 1', value: 'Option 1' },
                  { label: 'Option 2', value: 'Option 2' },
                  { label: 'Option 3', value: 'Option 3' },
                  { label: 'Option 4', value: 'Option 4' },
                  { label: 'Option 5', value: 'Option 5' },
                ]}
              /><br />
              Current Value: {JSON.stringify(this.state.valueRadioArray)}
            </Card>
          </Col>
          <Col xs="12" md="6" className="mb-3">
            <code>
              {
                `<RadioCheckbox
  type="checkbox"
  onChange={this.handleChange}
  options={[
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 2', value: 'Option 2' },
    { label: 'Option 3', value: 'Option 3' },
    { label: 'Option 4', value: 'Option 4' },
    { label: 'Option 5', value: 'Option 5' },
  ]}
/>`
              }
            </code>
            <Card className="p-3">
              <RadioCheckbox
                type="checkbox"
                onChange={this.handleChangeCheckboxArray}
                options={[
                  { label: 'Option 1', value: 'Option 1' },
                  { label: 'Option 2', value: 'Option 2' },
                  { label: 'Option 3', value: 'Option 3' },
                  { label: 'Option 4', value: 'Option 4' },
                  { label: 'Option 5', value: 'Option 5' },
                ]}
              /><br />
              Current Value: {JSON.stringify(this.state.valueCheckboxArray)}
            </Card>
          </Col>
        </Row>
        <hr />
        <h4>Default Value(s)</h4>
        <br />
        <Row>
          <Col xs="12" md="6" className="mb-3">
            <code>
              {
                `<RadioCheckbox
  type="radio"
  onChange={this.handleChange}
  defaultValue={{
    label: 'Option 1',
    value: 'Option 1'
  }}
  options={[
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 2', value: 'Option 2' },
    { label: 'Option 3', value: 'Option 3' },
    { label: 'Option 4', value: 'Option 4' },
    { label: 'Option 5', value: 'Option 5' },
  ]}
/>`
              }
            </code>
            <Card className="p-3">
              <RadioCheckbox
                type="radio"
                onChange={this.handleChangeRadioDefault}
                defaultValue={{ label: 'Option 1', value: 'Option 1' }}
                options={[
                  { label: 'Option 1', value: 'Option 1' },
                  { label: 'Option 2', value: 'Option 2' },
                  { label: 'Option 3', value: 'Option 3' },
                  { label: 'Option 4', value: 'Option 4' },
                  { label: 'Option 5', value: 'Option 5' },
                ]}
              /><br />
              Current Value: {JSON.stringify(this.state.valueRadioDefault)}
            </Card>
          </Col>
          <Col xs="12" md="6" className="mb-3">
            <code>
              {
                `<RadioCheckbox
  type="checkbox"
  onChange={this.handleChange}
  defaultValue={[
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 3', value: 'Option 3' },
  ]}
  options={[
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 2', value: 'Option 2' },
    { label: 'Option 3', value: 'Option 3' },
    { label: 'Option 4', value: 'Option 4' },
    { label: 'Option 5', value: 'Option 5' },
  ]}
/>`
              }
            </code>
            <Card className="p-3">
              <RadioCheckbox
                type="checkbox"
                onChange={this.handleChangeCheckboxDefault}
                defaultValue={[
                  { label: 'Option 1', value: 'Option 1' },
                  { label: 'Option 3', value: 'Option 3' },
                ]}
                options={[
                  { label: 'Option 1', value: 'Option 1' },
                  { label: 'Option 2', value: 'Option 2' },
                  { label: 'Option 3', value: 'Option 3' },
                  { label: 'Option 4', value: 'Option 4' },
                  { label: 'Option 5', value: 'Option 5' },
                ]}
              /><br />
              Current Value: {JSON.stringify(this.state.valueCheckboxDefault)}
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
