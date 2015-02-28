import React from 'react';
import CodeInput from './input';
import ASTOutput from './ast-output';
import emitter from './event';

var MainComponent = React.createClass({
  componentDidMount: function() {
    emitter.on('input-change', function(args) {
      this.setState({
        code: args.code
      });
    }.bind(this));
  },
  getInitialState: function() {
    return { code: "function hello() {\n console.log('hello world');\n}" };
  },
  render: function() {
    return (
      <div className='app'>
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

        <div className='ast'>
          <ASTOutput code={this.state.code} />
        </div>
      </div>
    );
  }
});


React.render(<MainComponent />, document.querySelector('.wrap'));
