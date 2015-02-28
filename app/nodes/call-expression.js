import React from 'react';
import ASTNode from '../ast-node';

export default React.createClass({
  componentDidMount: function() {
    console.log('call expression', this.props.node);
  },
  render: function() {
    var callArgs = this.props.node.arguments.map((arg) => {
      return <li key={arg}><ASTNode node={arg} /></li>;
    });
    return (
      <div className='expression-statement'>
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
