import React from 'react';
import ASTNode from '../ast-node';
import ToggleMixin from '../mixins/toggle';
import Path from '../path';
import PathMixin from '../mixins/path';

export default React.createClass({
  mixins: [ToggleMixin, PathMixin],
  render: function() {
    return (
      <div className='property ast-node'>
        <h4 onClick={this.onToggleClick}>Property</h4>
        <Path path={this.path()} />
        <ul className={this.state.visible ? 'visible' : 'hidden' }>
          <li><strong>key</strong>: <ASTNode parentPath={this.path() + '.key'} node={this.props.node.key} /></li>
          <li><strong>value</strong>: <ASTNode parentPath={this.path() + '.value'} node={this.props.node.value} /></li>
        </ul>
      </div>
    );
  }
});
