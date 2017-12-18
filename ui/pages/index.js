import React from 'react';

import { Code } from '../../src/index';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>niolabs UIKit</h1>
        <hr />
        nioLabs-themed components implemented in React and configurable via standard props or via nioLabs Pubkeeper!

        <hr />
        <h4>Install</h4>

        <Code>
          {
            'npm install --save @nio/ui-kit;'
          }
        </Code>

        <hr />
        <h4>Import Core CSS</h4>

        <Code>
          {
            '@import \'~@nio/ui-kit/dist/nio\';'
          }
        </Code>
        <br />
        The core CSS includes nioLabs theme overrides for bootstrap, as well as a few of the lightweight reset, normalize, mixin, and utility classes.<br /><br />

        Each component includes only the core css CSS classes it requires for itself. The docs site that is a part of this project uses webpack to remove any duplicates from the final combined css file.

        <hr />
        <h4>Customize</h4>

        To change the theme to match your brand colors, fork the repo and override the values in the src/_theme folder.

        <hr />
        <h4>Additional Documentation</h4>

        <ul>
          <li><a href="https://reactstrap.github.io/components/alerts/" rel="noopener noreferrer" target="_blank">ReactStrap Docs</a></li>
          <li><a href="https://frappe.github.io/charts/" rel="noopener noreferrer" target="_blank">Frappe Charts Docs</a></li>
        </ul>
      </div>
    );
  }
}
