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
    return { code: "console.log('hello world')" };
  },
  render: function() {
    return (
      <div>
        <div className='code'>
          <CodeInput code={this.state.code} />
          <pre><code>{ this.state.code }</code></pre>
        </div>
        <div className='ast'>
          <ASTOutput code={this.state.code} />
        </div>
      </div>
    );
  }
});


React.render(<MainComponent />, document.querySelector('.wrap'));
