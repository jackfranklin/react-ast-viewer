import React from 'react';
import ASTNode from '../ast-node';
import ToggleMixin from '../mixins/toggle';
import Path from '../path';
import PathMixin from '../mixins/path';
import MouseFocusMixin from '../mixins/mouse-focus';

export default React.createClass({
  mixins: [ToggleMixin, PathMixin, MouseFocusMixin],
  getInitialState: function() {
    return { isFocused: false }
  },
  render: function() {
    return (
      <div className='variable-declarator ast-node' onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter}>
        <h4 onClick={this.onToggleClick}>VariableDeclarator</h4>
        <Path path={this.path()} visible={this.state.isFocused} />
        <ul className={this.state.visible ? 'visible' : 'hidden' }>
          <li><strong>id</strong>: <ASTNode parentPath={this.path() + '.id'} node={this.props.node.id} /></li>
          <li><strong>init</strong>: <ASTNode parentPath={this.path() + '.init'} node={this.props.node.init} /></li>
        </ul>
      </div>
    );
  }
});
