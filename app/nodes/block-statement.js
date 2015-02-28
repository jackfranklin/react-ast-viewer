import React from 'react';
import ASTNode from '../ast-node';
import ToggleMixin from '../mixins/toggle';

export default React.createClass({
  mixins: [ToggleMixin],
  render: function() {
    var items = this.props.node.body.map((body) => {
      return <li key={body}><ASTNode node={body} /></li>;
    });

    return (
      <div className='block-statement ast-node'>
        <h4 onClick={this.onToggleClick}>BlockStatement</h4>
        <ul className={this.state.visible ? 'visible' : 'hidden' }>
          { items }
        </ul>
      </div>
    );
  }
});
