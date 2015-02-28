import React from 'react';
import CodeInput from './input';
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
        <CodeInput code={this.state.code} />
        <div>{ this.state.code }</div>
      </div>
    );
  }
});


React.render(<MainComponent />, document.querySelector('.wrap'));
