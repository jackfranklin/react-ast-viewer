import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className='literal ast-node'>
        <h4>Literal</h4>
        <p>Value: { this.props.node.value }</p>
      </div>
    );
  }
});
