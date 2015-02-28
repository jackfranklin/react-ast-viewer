import React from 'react';

export default React.createClass({
  componentDidMount: function() {
    console.log('literal', this.props.node);
  },
  render: function() {
    return (
      <div className='literal'>
        <h4>Literal</h4>
        <p>{ this.props.node.value }</p>
      </div>
    );
  }
});
