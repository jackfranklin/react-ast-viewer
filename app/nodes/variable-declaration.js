import React from 'react';
import ASTNode from '../ast-node';
import ToggleMixin from '../mixins/toggle';
import PathMixin from '../mixins/path';
import MouseFocusMixin from '../mixins/mouse-focus';
import Path from '../path';

export default React.createClass({
  mixins: [ToggleMixin, PathMixin, MouseFocusMixin],
  getInitialState: function() {
    return { isFocused: false }
  },
  render: function() {
    var declarations = this.props.node.declarations.map((dec, index) => {
      return (
        <li key={dec}>
          <ASTNode parentPath={this.arrayPath('declarations', index)} node={dec} />
        </li>
      );
    });
    return (
      <div onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter} className='variable-declaration ast-node'>
        <h4 onClick={this.onToggleClick}>VariableDeclaration</h4>
        <Path path={this.path()} visible={this.state.isFocused} />
        <ul className={this.state.visible ? 'visible' : 'hidden' }>
          <li><strong>Declarations</strong>: <ul>{ declarations }</ul></li>
        </ul>
      </div>
    );
  }
});
