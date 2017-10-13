import React from 'react';

import { Icon, Code, Row, Col } from '../../src/index';

export default class DocsPage extends React.Component {
  render() {
    const iconList = ['add', 'add-circle', 'bang', 'block-library', 'check-mark', 'chevron-down', 'chevron-up', 'clone', 'cloud-install', 'cloud-instance', 'database', 'delete', 'double-chevron', 'edit', 'expand', 'expand-all', 'expand-window', 'follow-path', 'hardware', 'ibar-move', 'jump', 'loader', 'logo', 'logout', 'menu', 'messaging', 'minus', 'open-window', 'other', 'path-modifier', 'play', 'profile', 'projects', 'question', 'recent', 'revert', 'save', 'search', 'settings', 'share', 'signal-modifier', 'social-media', 'split-page', 'stop', 'view-only', 'warning'];

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
        <h4>Inventory</h4>
        <br />
        {iconList.map(icon => (
          <div>
            <Row>
              <Col xs="2">
                <Icon name={icon} />
              </Col>
              <Col xs="10">
                <Code>
                  {`<Icon name="${icon}" />`}
                </Code>
              </Col>
            </Row>
            <br />
          </div>
        ))}
      </div>
    );
  }
}
