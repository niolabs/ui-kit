import React from 'react';

export default class DocsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Divider</h1>
        <hr />
        nioLabs makes use of the standard &lt;hr /&gt; tag, with a className modifier for a dashed divider.
        <hr />
        <h4>Use</h4>
        <code>
          {
            `standard divider
<hr />

dashed divider
<hr className="dashed" /> `
          }
        </code>
        <br />
        standard divider<br />
        <hr />
        dashed divider
        <hr className="dashed" />
      </div>
    );
  }
}
