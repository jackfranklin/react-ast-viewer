import React from 'react';
import ASTNode from '../ast-node';

export default React.createClass({
  render: function() {
    return (
      <div className='function-declaration'>
        <h4>FunctionDeclaration: {this.props.node.id.name}</h4>
        <ASTNode node={this.props.node.body} />
      </div>
    );
  }
});
