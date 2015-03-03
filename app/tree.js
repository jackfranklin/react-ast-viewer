import React from 'react';
import CodeInput from './input';
import ASTOutput from './ast-output';
import emitter from './event';

import CodeStore from './services/code-store';

export default React.createClass({
  componentWillMount: function() {
    emitter.on('input-change', this.onInputChange);
  },
  componentWillUnmount: function() {
    emitter.off('input-change', this.onInputChange);
  },
  getInitialState: function() {
    return { code: CodeStore.get(), allVisible: false };
  },
  onInputChange: function(args) {
    CodeStore.set(args.code);

    this.setState({
      code: args.code
    });
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
      <div className='ast'>
        <a href="#" onClick={this.onToggleAllClick}>{ toggleText }</a>
        <ASTOutput code={this.state.code} />
      </div>
    );
  }
});
