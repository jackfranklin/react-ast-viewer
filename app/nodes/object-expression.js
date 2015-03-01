import React from 'react';
import ASTNode from '../ast-node';
import ToggleMixin from '../mixins/toggle';

export default React.createClass({
  mixins: [ToggleMixin],
  render: function() {
    var properties = this.props.node.properties.map((property, index) => {
      return <li key={index}><ASTNode node={property} /></li>;
    });

    return (
      <div className='object-expression ast-node'>
        <h4 onClick={this.onToggleClick}>ObjectExpression</h4>
        <ul className={this.state.visible ? 'visible' : 'hidden' }>
          <li><strong>properties</strong>: <ul>{ properties }</ul></li>
        </ul>
      </div>
    );
  }
});
