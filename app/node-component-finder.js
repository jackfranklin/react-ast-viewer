import FunctionDeclaration from './nodes/function-declaration';
import BlockStatement from './nodes/block-statement';
import ExpressionStatement from './nodes/expression-statement';
import CallExpression from './nodes/call-expression';
import MemberExpression from './nodes/member-expression';
import Literal from './nodes/literal';
import Identifier from './nodes/identifier';
import VariableDeclaration from './nodes/variable-declaration';
import VariableDeclarator from './nodes/variable-declarator';
import ObjectExpression from './nodes/object-expression';
import Property from './nodes/property';
import FunctionExpression from './nodes/function-expression';
import AssignmentExpression from './nodes/assignment-expression';
import ThisExpression from './nodes/this-expression';
import ReturnStatement from './nodes/return-statement';
import BinaryExpression from './nodes/binary-expression';

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
  BinaryExpression
};

export default (type) => NODE_COMPONENTS[type];
