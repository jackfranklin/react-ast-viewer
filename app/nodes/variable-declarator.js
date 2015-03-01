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
      <ul>
        <li><strong>id</strong>: <ASTNode parentPath={this.path() + '.id'} node={this.props.node.id} /></li>
        <li><strong>init</strong>: <ASTNode parentPath={this.path() + '.init'} node={this.props.node.init} /></li>
      </ul>
    );
  }
});
