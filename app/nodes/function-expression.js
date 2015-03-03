import React from 'react';
import ASTNode from '../ast-node';
import PathMixin from '../mixins/path';

export default React.createClass({
  mixins: [PathMixin],
  render: function() {
    var params = this.props.node.params.map((param, index) => {
      return (
        <li key={index}>
          <ASTNode parentPath={this.arrayPath('params', index)} node={param} />
        </li>
      );
    });

    if(params.length) {
      var paramsOutput = <li><strong>params</strong>: <ul> { params } </ul></li>;
    }


    return (
      <ul>
        { paramsOutput }
        <li><strong>body</strong>: <ASTNode node={this.props.node.body} parentPath={`${this.path()}.body`} /></li>
      </ul>
    );
  }
});
