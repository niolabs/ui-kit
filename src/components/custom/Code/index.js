import hljs from 'highlight.js';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './_styles.scss';

export default class Code extends React.Component {
  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  highlightCode() {
    /* eslint-disable react/no-find-dom-node */
    const domNode = ReactDOM.findDOMNode(this);
    const nodes = domNode.querySelectorAll('pre code');

    let i;
    for (i = 0; i < nodes.length; i += 1) {
      hljs.highlightBlock(nodes[i]);
    }
  }

  render() {
    const { children, className, element, innerHTML } = this.props;
    let Element = element ? React.DOM[element] : null;

    if (innerHTML) {
      if (!Element) {
        Element = React.DOM.div;
      }
      return Element({ dangerouslySetInnerHTML: { __html: children }, className: className || null }, null);
    } else if (Element) {
      return Element({ className }, children);
    }
    return <pre><code className={className}>{children}</code></pre>;
  }
}

Code.defaultProps = {
  innerHTML: false,
  className: 'javascript',
  element: null,
};

Code.propTypes = {
  innerHTML: PropTypes.bool,
  className: PropTypes.string,
  element: PropTypes.node,
  children: PropTypes.string,
};

