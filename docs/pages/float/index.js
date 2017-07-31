import React from 'react';

import { Float, ClearFix } from '../../../src/float/index';
import { Callout } from '../../../src/callout/index';
import { Button } from '../../../src/button/index';

const FloatPage = () => (
  <div>
    <h1>Float</h1>
    <p>
      Helpful positioning components.
    </p>
    <h2>Basics</h2>
    <p>Importing the Float components:</p>
    <pre>
      <code>
        {
`// Import with local scoped class names (via CSS Modules)
import { Float, ClearFix } from 'niolabs-uikit/lib/float';`
        }
      </code>
    </pre>
    <p>
      Position content by placing it inside the Float component. Set the <code>position</code>
      prop to left, right or center to specify the position. Center will only work when Float
      has as absolute width. To clear floats, wrap them in the ClearFix component.
    </p>
    <pre>
      <code>
        {
`<ClearFix>
  <Float position="left">
    <Button>Left</Button>
  </Float>
  <Float position="right">
    <Button>Right</Button>
  </Float>
</ClearFix>
<Float position="center" noWrap>
  <img src="http://foundation.zurb.com/sites/docs/assets/img/voyager.jpg" />
</Float>`
        }
      </code>
    </pre>
    <ClearFix componentClass={Callout}>
      <Float position="left">
        <Button>Left</Button>
      </Float>
      <Float position="right">
        <Button>Right</Button>
      </Float>
    </ClearFix>
    <Float position="center" noWrap>
      <img role="presentation" src="http://foundation.zurb.com/sites/docs/assets/img/voyager.jpg" />
    </Float>
  </div>
);

export default FloatPage;
