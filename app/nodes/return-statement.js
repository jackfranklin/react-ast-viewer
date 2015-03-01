import React from 'react';
import ToggleMixin from '../mixins/toggle';
import ASTNode from '../ast-node';

export default React.createClass({
  mixins: [ToggleMixin],
  render: function() {
    return (
      <div className='return-statement ast-node'>
        <h4 onClick={this.onToggleClick}>ReturnStatement</h4>
        <ul className={this.state.visible ? 'visible' : 'hidden' }>
          <li><strong>argument</strong>: <ASTNode node={this.props.node.argument} /></li>
        </ul>
      </div>
    );
  }
});
