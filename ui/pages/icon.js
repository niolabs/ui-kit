import React from 'react';

import { Icon, Code, Row, Col } from '@nio/ui-kit';

export default class DocsPage extends React.Component {
  render() {
    const iconList = ['add-circle', 'add', 'angle-double-left', 'angle-double-right', 'bang', 'block-library', 'check-mark-o', 'check-mark', 'chevron-down', 'chevron-up', 'circle-o', 'circle', 'clone', 'cloud-install', 'cloud-instance', 'command', 'database', 'delete', 'double-chevron', 'edit', 'ellipsis-v', 'expand-all', 'expand-window', 'expand', 'follow-path', 'hardware', 'ibar-move', 'jump', 'loader', 'logo', 'logout', 'menu', 'messaging', 'minus', 'open-window', 'other', 'path-modifier', 'play', 'profile', 'projects', 'question', 'recent', 'restore', 'revert', 'save', 'search', 'settings', 'share', 'signal-modifier', 'social-media', 'split-page', 'stop', 'times', 'update', 'view-only', 'warning', 'ellipsis-h', 'apps', 'bell', 'browser', 'hashtag', 'light-bulb', 'robot', 'search-alt', 'picture', 'ban', 'account', 'balloon', 'block', 'discover', 'chat-bubble', 'mail', 'billing', 'overview', 'plan', 'teams', 'users', 'download', 'video-camera', 'bang-circle', 'bang-o'];

    return (
      <div>
        <h1>Icon</h1>
        <hr />
        <h4>Import</h4>
        <Code>
          {
            `// Import component (and relevant CSS)
import { Icon } from '@nio/ui-kit';`
          }
        </Code>
        <hr />
        <h4>Use</h4>
        <Code>
          {
            '<Icon name="profile" />'
          }
        </Code>
        <br />
        <Icon name="profile" />
        <hr />
        <h4>Colors</h4>
        <Code>
          {
            `<Icon name="profile" />
<Icon name="profile" color="primary" />
<Icon name="profile" color="secondary" />
<Icon name="profile" color="success" />
<Icon name="profile" color="warning" />
<Icon name="profile" color="danger" />`
          }
        </Code>
        <br />
        <Icon name="profile" />
        <Icon name="profile" color="primary" />
        <Icon name="profile" color="secondary" />
        <Icon name="profile" color="success" />
        <Icon name="profile" color="warning" />
        <Icon name="profile" color="danger" />
        <hr />
        <h4>Sizes</h4>
        <Code>
          {
            `<Icon name="profile" size="lg" />
<Icon name="profile" size="2x" />
<Icon name="profile" size="3x" />
<Icon name="profile" size="4x" />
<Icon name="profile" size="5x" />`
          }
        </Code>
        <br />
        <Icon name="profile" size="lg" />
        <Icon name="profile" size="2x" />
        <Icon name="profile" size="3x" />
        <Icon name="profile" size="4x" />
        <Icon name="profile" size="5x" />
        <hr />
        <h4>Rotate</h4>
        <Code>
          {
            `<Icon name="profile" rotate={90} />
<Icon name="profile" rotate={180} />
<Icon name="profile" rotate={270} />`
          }
        </Code>
        <br />
        <Icon name="profile" rotate={90} />
        <Icon name="profile" rotate={180} />
        <Icon name="profile" rotate={270} />
        <hr />
        <h4>Spin</h4>
        <Code>
          {
            '<Icon name="profile" spin />'
          }
        </Code>
        <br />
        <Icon name="profile" spin />
        <hr />
        <h4>Inventory (shown at size 3x)</h4>
        <br />
        <Row>
          {iconList.map(icon => (
            <Col xs="6" sm="12" md="6" lg="4" xl="3" key={icon} className="text-center mb-4">
              <Icon name={icon} size="3x" />
              <br />
              <br />
              <Code>{`<Icon name="${icon}" />`}</Code>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
