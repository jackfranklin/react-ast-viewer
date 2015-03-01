import React from 'react';
import ASTNode from '../ast-node';
import ToggleMixin from '../mixins/toggle';
import PathMixin from '../mixins/path';
import Path from '../path';

export default React.createClass({
  mixins: [ToggleMixin, PathMixin],
  declarationPath: function(index) {
    return `${this.path()}.declarations[${index}]`;
  },
  render: function() {
    var declarations = this.props.node.declarations.map((dec, index) => {
      return <li key={dec}><ASTNode parentPath={this.declarationPath(index)} node={dec} /></li>;
    });
    return (
      <div className='variable-declaration ast-node'>
        <h4 onClick={this.onToggleClick}>VariableDeclaration</h4>
        <Path path={this.path()} />
        <ul className={this.state.visible ? 'visible' : 'hidden' }>
          <li><strong>Declarations</strong>: <ul>{ declarations }</ul></li>
        </ul>
      </div>
    );
  }
});
