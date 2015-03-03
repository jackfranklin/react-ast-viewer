import React from 'react';
import CodeInput from './input';
import ASTOutput from './ast-output';
import emitter from './event';

import code from './starting-code.js!text';

export default React.createClass({
  componentWillMount: function() {
    emitter.on('input-change', function(args) {
      this.setState({
        code: args.code
      });
    }.bind(this));
  },
  getInitialState: function() {
    return { code:  code, allVisible: false };
  },
  onToggleAllClick: function(e) {
    e.preventDefault();
    var newVisible = !this.state.allVisible;
    emitter.emit('toggle-all', { visible: newVisible });
    this.setState({ allVisible: newVisible });
  },
  render: function() {
    var toggleText = this.state.allVisible ? 'Close' : 'Expand'

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
          <a href="#" onClick={this.onToggleAllClick}>{ toggleText }</a>
          <ASTOutput code={this.state.code} />
        </div>
      </div>
    );
  }
});
