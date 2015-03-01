import React from 'react';
import ASTNode from '../ast-node';
import ArrayItem from './sub-nodes/array-item';

export default React.createClass({
  render: function() {
    var callArgs = this.props.node.arguments.map((arg) => {
      return <li key={arg}><ASTNode node={arg} /></li>;
    });

    return (
      <ul>
        <li><strong>Callee</strong>: <ASTNode node={this.props.node.callee} /></li>
        <ArrayItem nodeTitle='Arguments' items={this.props.node.arguments} />
      </ul>
    );
  }
});
