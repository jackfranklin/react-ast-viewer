import React from 'react';
import ASTNode from '../ast-node';

export default React.createClass({
  render: function() {
    //TODO: this should put the items under a key?
    var items = this.props.node.body.map((body) => {
      return <li key={JSON.stringify(body)}><ASTNode node={body} /></li>;
    });

    return (
      <ul> { items } </ul>
    );
  }
});
