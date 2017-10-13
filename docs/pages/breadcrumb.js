import React from 'react';

import { Breadcrumb, BreadcrumbItem, Code } from '../../src/index';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Breadcrumbs</h1>
        <hr />
        <h4>Import</h4>
        <Code>
          {
            `// Import component (and relevant CSS)
import { Breadcrumb, BreadcrumbItem } from '@nio/ui-kit';`
          }
        </Code>
        <hr />
        <h4>Use</h4>
        <Code>
          {
            `<Breadcrumb>
  <BreadcrumbItem active>Home</BreadcrumbItem>
</Breadcrumb>
<Breadcrumb>
  <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
  <BreadcrumbItem active>Library</BreadcrumbItem>
</Breadcrumb>
<Breadcrumb>
  <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
  <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
  <BreadcrumbItem active>Data</BreadcrumbItem>
</Breadcrumb>`
          }
        </Code>
        <br />
        <Breadcrumb>
          <BreadcrumbItem active>Home</BreadcrumbItem>
        </Breadcrumb>
        <Breadcrumb>
          <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
          <BreadcrumbItem active>Library</BreadcrumbItem>
        </Breadcrumb>
        <Breadcrumb>
          <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
          <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
          <BreadcrumbItem active>Data</BreadcrumbItem>
        </Breadcrumb>
      </div>
    );
  }
}
