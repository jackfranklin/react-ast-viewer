import React from 'react';
import ASTNode from '../ast-node';
import ToggleMixin from '../mixins/toggle';

export default React.createClass({
  mixins: [ToggleMixin],
  render: function() {
    return (
      <div className='expression-statement ast-node'>
        <h4 onClick={this.onToggleClick}>ExpressionStatement</h4>
        <ul className={this.state.visible ? 'visible' : 'hidden' }>
          <li><strong>Expression</strong>: <ASTNode node={this.props.node.expression} /></li>
        </ul>
      </div>
    );
  }
});
