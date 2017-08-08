import React from 'react';

import { Media } from '../../src/index';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Media</h1>
        <hr />
        <h4>Import</h4>
        <code>
          {
            `// Import with local scoped class names (via CSS Modules)
import { Media } from '@nio/ui-kit';`
          }
        </code>
        <hr />
        <h4>Use</h4>
        <code>
          {
            `<Media>
<Media left href="#">
  <Media object data-src="/favicon.png" alt="Generic placeholder image" />
</Media>
<Media body>
  <Media heading>
    Media heading
  </Media>
  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
</Media>
</Media>`
          }
        </code>
        <br />
        <Media>
          <Media left href="#">
            <Media object data-src="/favicon.png" alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading>
              Media heading
            </Media>
            Cras sit amet nibh libero, in gravida nulla.
            Nulla vel metus scelerisque ante sollicitudin commodo.
            Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
            Fusce condimentum nunc ac nisi vulputate fringilla.
            Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
      </div>
    );
  }
}
