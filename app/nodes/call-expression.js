import React from 'react';
import ASTNode from '../ast-node';

export default React.createClass({
  render: function() {
    var callArgs = this.props.node.arguments.map((arg) => {
      return <li key={arg}><ASTNode node={arg} /></li>;
    });
    return (
      <div className='call-expression'>
        <h4>CallExpression</h4>
        <ul>
          <li>Callee: <ASTNode node={this.props.node.callee} /></li>
          <li>
            Arguments
            <ul>{ callArgs }</ul>
          </li>
        </ul>
      </div>
    );
  }
});
