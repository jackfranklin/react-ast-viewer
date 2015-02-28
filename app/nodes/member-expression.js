import React from 'react';
import ASTNode from '../ast-node';

export default React.createClass({
  componentDidMount: function() {
    console.log('member expression', this.props.node);
  },
  render: function() {
    return (
      <div className='member-expression'>
        <h4>Member Expression</h4>
      </div>
    );
  }
});
