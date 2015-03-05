import React from 'react';
import ASTNode from '../ast-node.jsx!';
import PathMixin from '../mixins/path';

export default React.createClass({
  mixins: [PathMixin],
  renderTest: function() {
    return (
      <li>
        <strong>test</strong>:
        <ASTNode node={this.props.node.test} parentPath={this.path() + '.test'} />
      </li>
    );
  },
  renderConsequent: function() {
    return (
      <li>
        <strong>consequent</strong>:
        <ASTNode node={this.props.node.consequent} parentPath={this.path() + '.consequent'} />
      </li>
    );
  },
  renderAlternate: function() {
    if(!this.props.node.alternate) return null;

    return (
      <li>
        <strong>alternate</strong>:
        <ASTNode node={this.props.node.alternate} parentPath={this.path() + '.alternate'} />
      </li>
    );
  },
  render: function() {
    return (
      <ul>
        { this.renderTest() }
        { this.renderConsequent() }
        { this.renderAlternate() }
      </ul>
    );
  }
});
