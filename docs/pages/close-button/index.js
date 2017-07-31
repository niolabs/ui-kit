import React from 'react';

import { CloseButton } from '../../../src/close-button/index';
import { Callout } from '../../../src/callout/index';

const CloseButtonPage = () => (
  <div>
    <h1>Close Button</h1>
    <p>
      The close button can be used anywhere you need something to go away on click.
    </p>
    <hr />
    <h2>Basics</h2>
    <p>Importing the CloseButton component:</p>
    <pre>
      <code>
        {
`// Import with local scoped class names (via CSS Modules)
import { CloseButton } from 'niolabs-uikit/lib/close-button';`
        }
      </code>
    </pre>
    <p>
      Clarify the button's purpose using the <code>aria-label</code> prop.
    </p>
    <pre>
      <code>
        {
`<Callout>
  <CloseButton aria-label="Close Alert" />
  <p>Look at this close button!</p>
</Callout>`
        }
      </code>
    </pre>
    <Callout>
      <CloseButton aria-label="Close Alert" />
      <p>Look at this close button!</p>
    </Callout>
  </div>
);

export default CloseButtonPage;
