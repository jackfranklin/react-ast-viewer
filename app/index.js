import React from 'react';
import CodeInput from './input';
import ASTOutput from './ast-output';
import emitter from './event';
import Tree from './tree';
import Router from 'react-router';

var {RouteHandler, Link} = Router;

import CodeStore from './services/code-store';

export default React.createClass({
  componentWillMount: function() {
    emitter.on('input-change', this.onInputChange);
  },
  componentWillUnmount: function() {
    emitter.off('input-change', this.onInputChange);
  },
  onInputChange: function(args) {
    CodeStore.set(args.code);

    this.setState({
      code: args.code
    });
  },
  getInitialState: function() {
    return { code: CodeStore.get(), allVisible: false };
  },
  render: function() {
    return (
      <div>
        <div className='intro'>
          <h1>AST Viewer</h1>
          <ul>
            <li>Enter some JavaScript in the box below, and click "render"</li>
            <li>The right hand side will show an abstract syntax tree of the code</li>
          </ul>
        </div>

        <div className='code'>
          <CodeInput code={this.state.code} />
        </div>

        <Tree />
      </div>
    );
  }
});
