import React from 'react';
import ASTNode from '../ast-node.jsx!';
import PathMixin from '../mixins/path';

export default React.createClass({
  mixins: [PathMixin],
  render: function() {
    var items = this.props.node.body.map((body, index) => {
      return (
        <li key={index}>
          <ASTNode parentPath={this.arrayPath('body', index)} node={body} />
        </li>
      );
    });

    return (
      <ul>
        <li><strong>Body</strong>: <ul> { items } </ul></li>
      </ul>
    );
  }
});
