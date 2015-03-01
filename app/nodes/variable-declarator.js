import React from 'react';
import ASTNode from '../ast-node';
import ToggleMixin from '../mixins/toggle';
import Path from '../path';
import PathMixin from '../mixins/path';

export default React.createClass({
  mixins: [ToggleMixin, PathMixin],
  render: function() {
    return (
      <div className='variable-declarator ast-node'>
        <h4 onClick={this.onToggleClick}>VariableDeclarator</h4>
        <Path path={this.path()} />
        <ul className={this.state.visible ? 'visible' : 'hidden' }>
          <li><strong>id</strong>: <ASTNode parentPath={this.path() + '.id'} node={this.props.node.id} /></li>
          <li><strong>init</strong>: <ASTNode parentPath={this.path() + '.init'} node={this.props.node.init} /></li>
        </ul>
      </div>
    );
  }
});
