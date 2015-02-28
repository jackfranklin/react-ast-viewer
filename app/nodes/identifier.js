import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className='identifer'>
        <h4>Identifier</h4>
        <p>Name: {this.props.node.name}</p>
      </div>
    );
  }
});
