import React, { useState } from 'react';

import { Col, Row, Card, Code } from '@nio/ui-kit';

import { ToggleButton } from '../../../dist';

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

export default () => {
  const [value, setValue] = useState(false);

  console.log(value);

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
  checked={value}
  onChange={(e) => setValue(e.target.checked)}
/>`
            }
          </Code>
          <Card className="p-5">
            <ToggleButton
              onChange={(e) => setValue(e.target.checked)}
            />
          </Card>
        </Col>
      </Row>
      <hr />
      <h4>Custom Labels, Custom Width</h4>
      <Row>
        <Col xs="12" className="mb-3">
          <Code>
            {
              `<ToggleButton
  width={170}
  icons={{
    checked: <div>on</div>,
    unchecked: <div>off</div>,
  }}
  checked={value}
  onChange={(e) => setValue(e.target.checked)}
/>`
            }
          </Code>
          <Card className="p-5">
            <ToggleButton
              width={170}
              icons={{
                checked: <div>doing the thing</div>,
                unchecked: <div>not doing the thing</div>,
              }}
              onChange={(e) => setValue(e.target.checked)}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
