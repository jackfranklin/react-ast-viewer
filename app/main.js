import React from 'react';
import CodeInput from './input';
import ASTOutput from './ast-output';
import emitter from './event';

import code from './starting-code.js!text';

var MainComponent = React.createClass({
  onInputChange: function(args) {
    this.setState({
      code: args.code
    });
  },
  componentWillMount: function() {
    emitter.on('input-change', this.onInputChange);
  },
  componentWillUnmount: function() {
    emitter.off('input-change', this.onInputChange);
  },
  getInitialState: function() {
    return { code:  code, allVisible: false, showOnlyTree: false };
  },
  onToggleAllClick: function(e) {
    e.preventDefault();
    var newVisible = !this.state.allVisible;
    emitter.emit('toggle-all', { visible: newVisible });
    this.setState({ allVisible: newVisible });
  },
  onShowTreeToggle: function(e) {
    e.preventDefault();
    this.setState({
      showOnlyTree: !this.state.showOnlyTree
    });
  },
  renderCodeInput: function() {
    if(this.state.showOnlyTree) return;

    return (
      <div className='code'>
        <CodeInput code={this.state.code} />
      </div>
    );
  },
  renderTreeOutput: function() {
    var showOnlyTreeText = this.state.showOnlyTree ? 'Code and Tree' : 'Just Tree';
    var toggleText = this.state.allVisible ? 'Close' : 'Expand';

    return (
      <div className={this.state.showOnlyTree ? 'full-screen ast' : 'ast'}>
        <a href="#" onClick={this.onShowTreeToggle}>{ showOnlyTreeText }</a>
        <a href="#" onClick={this.onToggleAllClick}>{ toggleText }</a>
        <ASTOutput code={this.state.code} />
      </div>
    );
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

        { this.renderCodeInput() }
        { this.renderTreeOutput() }
      </div>
    );
  }
});


React.render(<MainComponent />, document.querySelector('.wrap'));
