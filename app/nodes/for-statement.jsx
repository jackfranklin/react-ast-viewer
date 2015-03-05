import React from 'react';
import ASTNode from '../ast-node.jsx!';
import PathMixin from '../mixins/path';

export default React.createClass({
  mixins: [PathMixin],
  //TODO: try up these - mixin?
  renderInit: function() {
    return (
      <li>
        <strong>init</strong>:
        <ASTNode node={this.props.node.init} parentPath={this.path() + '.init'} />
      </li>
    );
  },
  renderTest: function() {
    return (
      <li>
        <strong>test</strong>:
        <ASTNode node={this.props.node.test} parentPath={this.path() + '.test'} />
      </li>
    );
  },
  renderUpdate: function() {
    return (
      <li>
        <strong>update</strong>:
        <ASTNode node={this.props.node.update} parentPath={this.path() + '.update'} />
      </li>
    );
  },
  renderBody: function() {
    return (
      <li>
        <strong>body</strong>:
        <ASTNode node={this.props.node.body} parentPath={this.path() + '.body'} />
      </li>
    );
  },
  render: function() {
    return (
      <ul>
        { this.renderInit() }
        { this.renderTest() }
        { this.renderUpdate() }
        { this.renderBody() }
      </ul>
    );
  }
});
