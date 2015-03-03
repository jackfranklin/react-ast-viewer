import React from 'react';
import ASTNode from '../ast-node';
import ArrayItem from './sub-nodes/array-item';
import PathMixin from '../mixins/path';

export default React.createClass({
  mixins: [PathMixin],
  render: function() {
    var callArgs = this.props.node.arguments.map((arg, index) => {
      return (
        <li key={index}><ASTNode node={arg} parentPath={this.arrayPath('arguments', index)} /></li>
      );
    });

    return (
      <ul>
        <li><strong>Callee</strong>: <ASTNode node={this.props.node.callee} parentPath={`${this.path()}.callee`}/></li>
        <li><strong>Arguments</strong>: <ul> { callArgs } </ul></li>
      </ul>
    );
  }
});
