import React from 'react';
import emitter from './event';

export default React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    this.emitChange();
  },
  emitChange: function() {
    var input = this.refs.input.getDOMNode().value.trim();
    emitter.emit('input-change', { code: input });
  },
  render: function() {
    return (
      <div>
        <form className="input-form" onSubmit={this.handleSubmit}>
          <textarea defaultValue={this.props.code} ref="input">
          </textarea>
          <input type="submit" className='btn' value="Render" />
        </form>
      </div>
    );
  }
});


