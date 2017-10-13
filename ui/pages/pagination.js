import React from 'react';

import { Pagination, PaginationItem, PaginationLink, Code } from '../../src/index';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Pagination</h1>
        <hr />
        <h4>Import</h4>
        <Code>
          {
            `// Import component (and relevant CSS)
import { Pagination, PaginationItem, PaginationLink } from '@nio/ui-kit';`
          }
        </Code>
        <hr />
        <h4>Use</h4>
        <Code>
          {
            `<Pagination>
  <PaginationItem>
    <PaginationLink previous href="#" />
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      1
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      2
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      3
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      4
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      5
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink next href="#" />
  </PaginationItem>
</Pagination>`
          }
        </Code>
        <br />
        <Pagination>
          <PaginationItem>
            <PaginationLink previous href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              4
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              5
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="#" />
          </PaginationItem>
        </Pagination>
      </div>
    );
  }
}
