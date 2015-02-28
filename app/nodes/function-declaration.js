import React from 'react';
import ASTNode from '../ast-node';
import ToggleMixin from '../mixins/toggle';

export default React.createClass({
  mixins: [ToggleMixin],
  render: function() {
    return (
      <div className="function-declaration ast-node">
        <h4 onClick={this.onToggleClick}>FunctionDeclaration</h4>
        <ul className={this.state.visible ? 'visible' : 'hidden' }>
          <li><strong>Name</strong>: { this.props.node.id.name }</li>
          <li><strong>Body</strong>: <ASTNode node={this.props.node.body} /></li>
        </ul>
      </div>
    );
  }
});
