import React from 'react';
import esprima from 'esprima';
import ASTNode from './ast-node.jsx!';

export default React.createClass({
  componentWillMount: function() {
    this.setState({
      tree: this.parseCode(this.props.code)
    });
  },
  componentWillReceiveProps: function(props) {
    this.setState({
      tree: this.parseCode(props.code)
    });
  },
  parseCode: function(code) {
    var tree = esprima.parse(code, { loc: true });
    console.log(tree);
    return tree;
  },
  render: function() {
    var nodes = this.state.tree.body.map((body, index) => {
      return <li key={JSON.stringify(body)}><ASTNode parentPath={`/${index}`} node={body} /></li>;
    });

    return <ul>{nodes}</ul>;
  }
});
