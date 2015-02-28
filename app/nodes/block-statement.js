import React from 'react';
import ASTNode from '../ast-node';

export default React.createClass({
  componentDidMount: function() {
    console.log('block statement', this.props.node);
  },
  render: function() {
    var items = this.props.node.body.map((body) => {
      return <li key={body}><ASTNode node={body} /></li>;
    });

    return (
      <div className='block-statement'>
        <h4>Block Statement</h4>
        <ul>{ items }</ul>
      </div>
    );
  }
});
