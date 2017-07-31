import React from 'react';

import { Callout } from '../../src/components/callout/index';

const CalloutPage = () => (
  <div>
    <h1>Callout</h1>
    <p>
      Themed boxes allowing you to present content in a more prominent fashion than normal.
    </p>
    <hr />
    <h2>Basics</h2>
    <p>Importing the Callout component:</p>
    <pre>
      <code>
        {
`// Import with local scoped class names (via CSS Modules)
import { Callout }  from '@nio/ui-kit/lib/components/callout';`
        }
      </code>
    </pre>
    <pre>
      <code>
        {
`<Callout>
  <h5>This is a callout.</h5>
  <p>It has an easy to override visual style, and is appropriately subdued.</p>
  <a href="#">It's dangerous to go alone, take this.</a>
</Callout>`
        }
      </code>
    </pre>
    <Callout>
      <h5>This is a callout.</h5>
      <p>It has an easy to override visual style, and is appropriately subdued.</p>
      <a href="#">It's dangerous to go alone, take this.</a>
    </Callout>
    <hr />
    <h2>Theming</h2>
    <pre>
      <code>
        {
`<Callout color="primary">
  <h5>This is a primary panel.</h5>
  <p>It has an easy to override visual style, and is appropriately subdued.</p>
  <a href="#">It's dangerous to go alone, take this.</a>
</Callout>`
        }
      </code>
    </pre>
    <Callout color="primary">
      <h5>This is a primary panel.</h5>
      <p>It has an easy to override visual style, and is appropriately subdued.</p>
      <a href="#">It's dangerous to go alone, take this.</a>
    </Callout>
    <pre>
      <code>
        {
`<Callout color="secondary">
  <h5>This is a secondary panel.</h5>
  <p>It has an easy to override visual style, and is appropriately subdued.</p>
  <a href="#">It's dangerous to go alone, take this.</a>
</Callout>`
        }
      </code>
    </pre>
    <Callout color="secondary">
      <h5>This is a secondary panel.</h5>
      <p>It has an easy to override visual style, and is appropriately subdued.</p>
      <a href="#">It's dangerous to go alone, take this.</a>
    </Callout>
    <pre>
      <code>
        {
`<Callout color="success">
  <h5>This is a success panel.</h5>
  <p>It has an easy to override visual style, and is appropriately subdued.</p>
  <a href="#">It's dangerous to go alone, take this.</a>
</Callout>`
        }
      </code>
    </pre>
    <Callout color="success">
      <h5>This is a success panel.</h5>
      <p>It has an easy to override visual style, and is appropriately subdued.</p>
      <a href="#">It's dangerous to go alone, take this.</a>
    </Callout>
    <pre>
      <code>
        {
`<Callout color="warning">
  <h5>This is a warning panel.</h5>
  <p>It has an easy to override visual style, and is appropriately subdued.</p>
  <a href="#">It's dangerous to go alone, take this.</a>
</Callout>`
        }
      </code>
    </pre>
    <Callout color="warning">
      <h5>This is a warning panel.</h5>
      <p>It has an easy to override visual style, and is appropriately subdued.</p>
      <a href="#">It's dangerous to go alone, take this.</a>
    </Callout>
    <pre>
      <code>
        {
`<Callout color="alert">
  <h5>This is a alert panel.</h5>
  <p>It has an easy to override visual style, and is appropriately subdued.</p>
  <a href="#">It's dangerous to go alone, take this.</a>
</Callout>`
        }
      </code>
    </pre>
    <Callout color="alert">
      <h5>This is a alert panel.</h5>
      <p>It has an easy to override visual style, and is appropriately subdued.</p>
      <a href="#">It's dangerous to go alone, take this.</a>
    </Callout>
    <hr />
    <h2>Sizing</h2>
    <pre>
      <code>
        {
`<Callout color="primary" size="small">
  <h5>This is a primary panel.</h5>
  <p>It has an easy to override visual style, and is appropriately subdued.</p>
  <a href="#">It's dangerous to go alone, take this.</a>
</Callout>`
        }
      </code>
    </pre>
    <Callout color="primary" size="small">
      <h5>This is a primary panel.</h5>
      <p>It has an easy to override visual style, and is appropriately subdued.</p>
      <a href="#">It's dangerous to go alone, take this.</a>
    </Callout>
    <pre>
      <code>
        {
`<Callout color="primary" size="large">
  <h5>This is a primary panel.</h5>
  <p>It has an easy to override visual style, and is appropriately subdued.</p>
  <a href="#">It's dangerous to go alone, take this.</a>
</Callout>`
        }
      </code>
    </pre>
    <Callout color="primary" size="large">
      <h5>This is a primary panel.</h5>
      <p>It has an easy to override visual style, and is appropriately subdued.</p>
      <a href="#">It's dangerous to go alone, take this.</a>
    </Callout>
  </div>
);

export default CalloutPage;
