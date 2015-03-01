import React from 'react';
import ASTNode from '../ast-node';
import ToggleMixin from '../mixins/toggle';

export default React.createClass({
  mixins: [ToggleMixin],
  render: function() {
    return (
      <div className='property ast-node'>
        <h4 onClick={this.onToggleClick}>Property</h4>
        <ul className={this.state.visible ? 'visible' : 'hidden' }>
          <li><strong>key</strong>: <ASTNode node={this.props.node.key} /></li>
          <li><strong>value</strong>: <ASTNode node={this.props.node.value} /></li>
        </ul>
      </div>
    );
  }
});
