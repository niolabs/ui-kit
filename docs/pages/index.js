import React from 'react';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>nioLABS UI Kit</h1>
        <hr />
        <p>
        The nioLABS UI Kit is a ReactJS component library that uses ReactStrap (Bootstrap 4)
          for layout and button components, and Victory Charts for data visualization.<br /><br />
        It refactors ReactStrap Components to use CSS-Modules, isolating their scope so
          they play well with the rest of your application.<br /><br />
        Victory Charts are similarly themed using the nioLABS brand colors.<br /><br />
        This nioLABS UI Kit presents skinned versions of all currently available ReactStrap
          and Victory Charts components... As such, you will want to visit the docs for
          those libraries when implementing this library.
        </p>
        <hr />
        <h4>Install</h4>
        <code>
          {
            `npm install --save '@nio/ui-kit';`
          }
        </code>
        <hr />
        <h4>Links to Included Component Libraries</h4>
        <ul>
          <li><a href="https://reactstrap.github.io/components/alerts/" target="_blank">ReactStrap</a></li>
          <li><a href="http://formidable.com/open-source/victory/docs" target="_blank">Victory Charts Docs</a></li>
        </ul>
      </div>
    );
  }
}
