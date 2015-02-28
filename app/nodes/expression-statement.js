import React from 'react';
import ASTNode from '../ast-node';

export default React.createClass({
  render: function() {
    return (
      <div className='expression-statement'>
        <h4>ExpressionStatement</h4>
        <ASTNode node={this.props.node.expression} />
      </div>
    );
  }
});
