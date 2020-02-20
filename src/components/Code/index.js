import hljs from 'highlight.js';
import React from 'react';
import './styles.css';

export default class Code extends React.Component {
  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  highlightCode() {
    const nodes = document.querySelectorAll('pre code');

    for (let i = 0; i < nodes.length; i += 1) {
      hljs.highlightBlock(nodes[i]);
    }
  }

  render() {
    const { children, className } = this.props;

    return <pre><code className={className || 'javascript'}>{children}</code></pre>;
  }
}
