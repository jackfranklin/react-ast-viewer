import React from 'react';
import ASTNode from '../ast-node';
import ToggleMixin from '../mixins/toggle';
import PathMixin from '../mixins/path';
import Path from '../path';

export default React.createClass({
  mixins: [ToggleMixin, PathMixin],
  propertyPath: function(index) {
    return `${this.path()}.properties[${index}]`;
  },
  render: function() {
    var properties = this.props.node.properties.map((property, index) => {
      return <li key={index}><ASTNode parentPath={this.propertyPath(index)} node={property} /></li>;
    });

    return (
      <div className='object-expression ast-node'>
        <h4 onClick={this.onToggleClick}>ObjectExpression</h4>
        <Path path={this.path()} />
        <ul className={this.state.visible ? 'visible' : 'hidden' }>
          <li><strong>properties</strong>: <ul>{ properties }</ul></li>
        </ul>
      </div>
    );
  }
});
