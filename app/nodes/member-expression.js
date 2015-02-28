import React from 'react';
import ASTNode from '../ast-node';

export default React.createClass({
  render: function() {
    return (
      <div className='member-expression'>
        <h4>Member Expression</h4>
        <ul>
          <li>Object: <ASTNode node={this.props.node.object} /></li>
          <li>Property: <ASTNode node={this.props.node.property} /></li>
        </ul>
      </div>
    );
  }
});
