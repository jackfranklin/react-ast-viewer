import React from 'react';

import FunctionDeclaration from './nodes/function-declaration';
import BlockStatement from './nodes/block-statement';
import ExpressionStatement from './nodes/expression-statement';
import CallExpression from './nodes/call-expression';
import MemberExpression from './nodes/member-expression';
import Literal from './nodes/literal';

const NODE_COMPONENTS = {
  FunctionDeclaration,
  BlockStatement,
  ExpressionStatement,
  CallExpression,
  MemberExpression,
  Literal
};

export default React.createClass({
  render: function() {
    return (
      <div>
        { console.log(this.props.node.type, this.props.node) }
        {React.createElement(NODE_COMPONENTS[this.props.node.type],  {node: this.props.node})}
      </div>
    )
  }
});
