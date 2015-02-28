import React from 'react';
import ASTNode from '../ast-node';
import ToggleMixin from '../mixins/toggle';

export default React.createClass({
  mixins: [ToggleMixin],
  render: function() {
    return (
      <div className='member-expression ast-node'>
        <h4 onClick={this.onToggleClick}>Member Expression</h4>
        <ul className={this.state.visible ? 'visible' : 'hidden' }>
          <li><strong>Object</strong>: <ASTNode node={this.props.node.object} /></li>
          <li><strong>Property</strong>: <ASTNode node={this.props.node.property} /></li>
        </ul>
      </div>
    );
  }
});
