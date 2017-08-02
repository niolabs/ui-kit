import React from 'react';

import { Breadcrumb, BreadcrumbItem } from '../../src/components';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Breadcrumb</h1>
        <p>
          Keeping track of your location, making life easy.
        </p>
        <hr />
        <h4>Use</h4>
        <code>
          {
`// Import with local scoped class names (via CSS Modules)
import { Breadcrumb, BreadcrumbItem } from '@nio/ui-kit/lib';

<Breadcrumb>
  <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
  <BreadcrumbItem active>Library</BreadcrumbItem>
</Breadcrumb>`
          }
        </code>
        <br />
        <Breadcrumb>
          <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
          <BreadcrumbItem active>Library</BreadcrumbItem>
        </Breadcrumb>
      </div>
    );
  }
}
