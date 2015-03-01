import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <ul><li><strong>Name</strong>: {this.props.node.name}</li></ul>
    );
  }
});
