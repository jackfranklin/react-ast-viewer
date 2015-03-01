import React from 'react';
import ASTNode from '../ast-node';
import ToggleMixin from '../mixins/toggle';

export default React.createClass({
  mixins: [ToggleMixin],
  render: function() {
    return (
      <div className='assignment-expression ast-node'>
        <h4 onClick={this.onToggleClick}>AssignmentExpression</h4>
        <ul className={this.state.visible ? 'visible' : 'hidden' }>
          <li><strong>operator</strong>: { this.props.node.operator }</li>
          <li><strong>left</strong>: <ASTNode node={this.props.node.left} /></li>
          <li><strong>right</strong>: <ASTNode node={this.props.node.right} /></li>
        </ul>
      </div>
    );
  }
});
