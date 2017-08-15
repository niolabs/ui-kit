import React from 'react';

import { Button, Form, FormGroup, Label, Input, FormText, RadioGroup, Radio, CheckboxGroup, Checkbox } from '../../src/index';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Form</h1>
        <hr />
        <h4>Import</h4>
        <code>
          {
            `// Import with local scoped class names (via CSS Modules)
import { Button, Form, FormGroup, Label, Input, FormText } from '@nio/ui-kit';`
          }
        </code>
        <hr />
        <h4>Use</h4>
        <code>
          {
            `<Form>
  <FormGroup>
    <Label for="exampleEmail">Email</Label>
    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">Password</Label>
    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
  </FormGroup>
  <FormGroup>
    <Label for="exampleSelect">Select</Label>
    <Input type="select" name="select" id="exampleSelect">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Input>
  </FormGroup>
  <FormGroup>
    <Label for="exampleSelectMulti">Select Multiple</Label>
    <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Input>
  </FormGroup>
  <FormGroup>
    <Label for="exampleText">Text Area</Label>
    <Input type="textarea" name="text" id="exampleText" />
  </FormGroup>
  <FormGroup>
    <Label for="exampleFile">File</Label>
    <Input type="file" name="file" id="exampleFile" />
    <FormText color="muted">
      This is some placeholder block-level help text for the above input.
      It's a bit lighter and easily wraps to a new line.
    </FormText>
  </FormGroup>
  <FormGroup tag="fieldset">
    <legend>Radio Buttons</legend>
    <RadioGroup name="fruit" selectedValue={this.state.selectedValue} onChange={this.handleChange}>
      <Radio value="apple" />Apple
      <Radio value="orange" />Orange
      <Radio value="watermelon" />Watermelon
    </RadioGroup>
  </FormGroup>
  <FormGroup tag="fieldset">
    <legend>Checkboxes</legend>
    <CheckboxGroup name="fruits" value={['kiwi', 'pineapple']} onChange={this.fruitsChanged}>
      <Checkbox value="kiwi"/>
      <Checkbox value="pineapple"/>
      <Checkbox value="watermelon"/>
    </CheckboxGroup>
  </FormGroup>
</Form>`
          }
        </code>
        <br />
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Select</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelectMulti">Select Multiple</Label>
            <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <FormGroup tag="fieldset">
            <legend>Text Area</legend>
            <Label for="exampleText">Text Area</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
          <FormGroup tag="fieldset">
            <legend>File Upload</legend>
            <Label for="exampleFile">File</Label>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              This is some placeholder block-level help text for the above input.
              It is a bit lighter and easily wraps to a new line.
            </FormText>
          </FormGroup>
          <FormGroup tag="fieldset">
            <legend>Radio Buttons</legend>
            <RadioGroup name="fruit" value={'apple'}>
              <Radio value="apple" />Apple
              <Radio value="orange" />Orange
              <Radio value="watermelon" />Watermelon
            </RadioGroup>
          </FormGroup>
          <FormGroup tag="fieldset">
            <legend>Checkboxes</legend>
            <CheckboxGroup name="fruits" value={['kiwi', 'pineapple']}>
              <Checkbox value="kiwi" />
              <Checkbox value="pineapple" />
              <Checkbox value="watermelon" />
            </CheckboxGroup>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
