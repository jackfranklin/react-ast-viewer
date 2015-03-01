import React from 'react';
import ASTNode from '../ast-node';
import ToggleMixin from '../mixins/toggle';

export default React.createClass({
  mixins: [ToggleMixin],
  render: function() {
    var declarations = this.props.node.declarations.map((dec) => {
      return <li key={dec}><ASTNode node={dec} /></li>;
    });
    return (
      <div className='variable-declaration ast-node'>
        <h4 onClick={this.onToggleClick}>VariableDeclaration</h4>
        <ul className={this.state.visible ? 'visible' : 'hidden' }>
          <li><strong>Declarations</strong>: <ul>{ declarations }</ul></li>
        </ul>
      </div>
    );
  }
});
