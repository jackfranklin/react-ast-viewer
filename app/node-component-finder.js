import emitter from './event';

import FunctionDeclaration from './nodes/function-declaration.jsx!';
import BlockStatement from './nodes/block-statement.jsx!';
import ExpressionStatement from './nodes/expression-statement.jsx!';
import CallExpression from './nodes/call-expression.jsx!';
import MemberExpression from './nodes/member-expression.jsx!';
import Literal from './nodes/literal.jsx!';
import Identifier from './nodes/identifier.jsx!';
import VariableDeclaration from './nodes/variable-declaration.jsx!';
import VariableDeclarator from './nodes/variable-declarator.jsx!';
import ObjectExpression from './nodes/object-expression.jsx!';
import Property from './nodes/property.jsx!';
import FunctionExpression from './nodes/function-expression.jsx!';
import AssignmentExpression from './nodes/assignment-expression.jsx!';
import ThisExpression from './nodes/this-expression.jsx!';
import ReturnStatement from './nodes/return-statement.jsx!';
import BinaryExpression from './nodes/binary-expression.jsx!';
import ForStatement from './nodes/for-statement.jsx!';
import UpdateExpression from './nodes/update-expression.jsx!';
import IfStatement from './nodes/if-statement.jsx!';
import BreakStatement from './nodes/break-statement.jsx!';

const NODE_COMPONENTS = {
  FunctionDeclaration,
  BlockStatement,
  ExpressionStatement,
  CallExpression,
  MemberExpression,
  Literal,
  Identifier,
  VariableDeclaration,
  VariableDeclarator,
  ObjectExpression,
  Property,
  FunctionExpression,
  AssignmentExpression,
  ThisExpression,
  ReturnStatement,
  BinaryExpression,
  ForStatement,
  UpdateExpression,
  IfStatement,
  BreakStatement
};

export default function(type) {
  var component = NODE_COMPONENTS[type];

  if(component) return component;

  throw new Error(`No Component found for ${type}`);
};
