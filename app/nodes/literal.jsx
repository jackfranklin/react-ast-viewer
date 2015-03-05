import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <ul><li><strong>Value</strong>: { this.props.node.value }</li></ul>
    );
  }
});
