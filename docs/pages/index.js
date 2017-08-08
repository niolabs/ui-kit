import React from 'react';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>nioLABS UIKit</h1>
        <hr />
        nioLabs-themed components implemented in React and configurable via standard props or via nioLabs Pubkeeper!

        <hr />
        <h4>Install</h4>

        <code>
          {
            'npm install --save @nio/ui-kit;'
          }
        </code>

        <hr />
        <h4>Import Core CSS</h4>

        <code>
          {
            '@import \'~ui-kit/nio\';'
          }
        </code>

        The core CSS includes nioLabs theme overrides for bootstrap, as well as a few of the lightweight reset, normalize, mixin, and utility classes:<br /><br />

        <small>
          {'@import \'~bootstrap/scss/mixins\';'}<br />
          {'@import \'~bootstrap/scss/normalize\';'}<br />
          {'@import \'~bootstrap/scss/reboot\';'}<br />
          {'@import \'~bootstrap/scss/type\';'}<br />
          {'@import \'~bootstrap/scss/code\';'}<br />
          {'@import \'~bootstrap/scss/utilities\';'}<br />
          {'@import \'~bootstrap/scss/transitions\';'}<br />
          {'@import \'~bootstrap/scss/responsive-embed\';'}<br /><br />
        </small>

        Each component includes only the core css CSS classes it requires for itself. The docs site that is a part of this project uses webpack to remove any duplicates from the final combined css file.

        <hr />
        <h4>Customize</h4>

        To change the theme to match your brand colors, fork the repo and override the values in the src/_theme.scss.

        <hr />
        <h4>Additional Documentation</h4>

        <ul>
          <li><a href="https://reactstrap.github.io/components/alerts/" target="_blank">ReactStrap Docs</a></li>
          <li><a href="http://formidable.com/open-source/victory/docs" target="_blank">Victory Charts Docs</a></li>
        </ul>
      </div>
    );
  }
}
