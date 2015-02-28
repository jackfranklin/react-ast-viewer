import React from 'react';
import ASTNode from '../ast-node';
import ToggleMixin from '../mixins/toggle';

export default React.createClass({
  mixins: [ToggleMixin],
  render: function() {
    var callArgs = this.props.node.arguments.map((arg) => {
      return <li key={arg}><ASTNode node={arg} /></li>;
    });
    return (
      <div className='call-expression ast-node'>
        <h4 onClick={this.onToggleClick}>CallExpression</h4>
        <ul className={this.state.visible ? 'visible' : 'hidden' }>
          <li><strong>Callee</strong>: <ASTNode node={this.props.node.callee} /></li>
          <li><strong>Arguments</strong>: <ul>{ callArgs }</ul></li>
        </ul>
      </div>
    );
  }
});
