import React from 'react';
import ASTNode from '../ast-node.jsx!';
import PathMixin from '../mixins/path';

export default React.createClass({
  mixins: [PathMixin],
  getInitialState: function() {
    return { isFocused: false }
  },
  render: function() {
    var declarations = this.props.node.declarations.map((dec, index) => {
      return (
        <li key={index}>
          <ASTNode parentPath={this.arrayPath('declarations', index)} node={dec} />
        </li>
      );
    });
    return (
      <ul>
        <li><strong>Declarations</strong>: <ul>{ declarations }</ul></li>
      </ul>
    );
  }
});
