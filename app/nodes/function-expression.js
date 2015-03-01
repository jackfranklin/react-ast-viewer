import React from 'react';
import ASTNode from '../ast-node';
import ToggleMixin from '../mixins/toggle';

export default React.createClass({
  mixins: [ToggleMixin],
  render: function() {
    return (
      <div className='function-expression ast-node'>
        <h4 onClick={this.onToggleClick}>FunctionExpression</h4>
        <ul className={this.state.visible ? 'visible' : 'hidden' }>
          <li><strong>body</strong>: <ASTNode node={this.props.node.body} /></li>
        </ul>
      </div>
    );
  }
});
