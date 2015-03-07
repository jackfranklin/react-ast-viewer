import React from 'react';
import CodeInput from './input.jsx!';
import ASTOutput from './ast-output.jsx!';
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
    return (
      <div className={this.state.showOnlyTree ? 'full-screen ast' : 'ast'}>
        <ASTOutput code={this.state.code} />
      </div>
    );
  },
  render: function() {
    var showOnlyTreeText = this.state.showOnlyTree ? 'View Code and Tree' : 'View Just Tree';
    var toggleText = this.state.allVisible ? 'Close Tree' : 'Expand Tree';

    return (
      <div className='app'>
        <div className='header'>
          <h1>ReactJS AST Viewer</h1>
          <p>By <a href='http://twitter.com/Jack_Franklin'>@Jack_Franklin</a></p>
        </div>

        <div className='app-btns'>
          <a href="#" className='btn' onClick={this.onShowTreeToggle}>{ showOnlyTreeText }</a>
          <a href="#" className='btn' onClick={this.onToggleAllClick}>{ toggleText }</a>
        </div>

        { this.renderCodeInput() }
        { this.renderTreeOutput() }
      </div>
    );
  }
});


React.render(<MainComponent />, document.querySelector('.wrap'));
