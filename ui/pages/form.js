import React from 'react';

import { Form, FormGroup, Label, Input, FormFeedback, Code } from '../../dist/index';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Form</h1>
        <hr />
        <h4>Import</h4>
        <Code>
          {
            `// Import component (and relevant CSS)
import { Form, FormGroup, Label, Input, FormFeedback } from '@nio/ui-kit';`
          }
        </Code>
        <hr />
        <h4>Use</h4>
        <Code>
          {
            `<Form>
  <FormGroup>
    <Label for="exampleEmail">This is the field label</Label>
    <Input />
    <FormFeedback>This field is required</FormFeedback>
  </FormGroup>
  <FormGroup color="success">
    <Label for="exampleEmail">Input with success</Label>
    <Input state="success" />
    <FormFeedback>Success! You did it!</FormFeedback>
  </FormGroup>
  <FormGroup color="danger">
    <Label for="examplePassword">Input with danger</Label>
    <Input state="danger" />
    <FormFeedback>Oh noes! that name is already taken</FormFeedback>
  </FormGroup>
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
    <Label for="exampleText">Text Area</Label>
    <Input type="textarea" name="text" id="exampleText" />
  </FormGroup>
</Form>`
          }
        </Code>
        <br />
        <Form>
          <FormGroup>
            <Label for="exampleEmail">This is the field label</Label>
            <Input />
            <FormFeedback>This field is required</FormFeedback>
          </FormGroup>
          <FormGroup color="success">
            <Label for="exampleEmail">Input with success</Label>
            <Input valid />
            <FormFeedback>Success! You did it!</FormFeedback>
          </FormGroup>
          <FormGroup color="danger">
            <Label for="examplePassword">Input with danger</Label>
            <Input valid={false} />
            <FormFeedback>Oh noes! that name is already taken</FormFeedback>
          </FormGroup>
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
            <Label for="exampleText">Text Area</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
        </Form>
      </div>
    );
  }
}
