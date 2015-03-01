import React from 'react';
import ASTNode from '../ast-node';
import ToggleMixin from '../mixins/toggle';

export default React.createClass({
  mixins: [ToggleMixin],
  render: function() {
    return (
      <div className='variable-declarator ast-node'>
        <h4 onClick={this.onToggleClick}>VariableDeclarator</h4>
        <ul className={this.state.visible ? 'visible' : 'hidden' }>
          <li><strong>id</strong>: <ASTNode node={this.props.node.id} /></li>
          <li><strong>init</strong>: <ASTNode node={this.props.node.init} /></li>
        </ul>
      </div>
    );
  }
});
