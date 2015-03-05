import React from 'react';

export default React.createClass({
  render: function() {
    if(!this.props.node.label) return null;

    return (
      <li><strong>label</strong>: { this.props.node.label }</li>
    );
  }
});
