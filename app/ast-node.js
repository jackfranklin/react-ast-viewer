import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <p> {this.props.node.type} </p>
    );
  }
});
