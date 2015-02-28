import FunctionDeclaration from './nodes/function-declaration';
import BlockStatement from './nodes/block-statement';
import ExpressionStatement from './nodes/expression-statement';
import CallExpression from './nodes/call-expression';
import MemberExpression from './nodes/member-expression';
import Literal from './nodes/literal';
import Identifier from './nodes/identifier';

const NODE_COMPONENTS = {
  FunctionDeclaration,
  BlockStatement,
  ExpressionStatement,
  CallExpression,
  MemberExpression,
  Literal,
  Identifier
};

export default function(type) {
  if(NODE_COMPONENTS[type]) return NODE_COMPONENTS[type];

  throw new Error('Component type missing ' + type);
}
