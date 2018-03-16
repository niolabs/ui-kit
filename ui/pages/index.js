import React from 'react';

import { Code } from '../../dist/index';

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
        <hr />
        <h4>Apache 2.0 License</h4>

        Copyright 2017-2018 n.io innovation, LLC

        Licensed under the Apache License, Version 2.0 (the License);
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at

        <a href="http://www.apache.org/licenses/LICENSE-2.0" rel="noopener noreferrer" target="_blank">http://www.apache.org/licenses/LICENSE-2.0</a>

        Unless required by applicable law or agreed to in writing, software
        distributed under the License is distributed on an AS IS BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        See the License for the specific language governing permissions and
        limitations under the License.

      </div>
    );
  }
}
