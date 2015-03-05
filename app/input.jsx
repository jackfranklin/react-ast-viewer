import React from 'react';
import emitter from './event';

import ace from 'ace';

export default React.createClass({
  componentDidMount: function() {
    this.editor = ace.edit('ace-editor');
  },
  componentWillReceiveProps: function() {
    console.log(this.editor);
    this.editor.destroy();
    console.log(document.getElementById('ace-editor'));
    this.editor = ace.edit('ace-editor');
  },
  handleSubmit: function(e) {
    e.preventDefault();
    this.emitChange();
  },
  emitChange: function() {
    var input = this.editor.getSession().getValue();
    emitter.emit('input-change', { code: input });
  },
  render: function() {
    return (
      <div>
        <form className="input-form" onSubmit={this.handleSubmit}>
          <pre id='ace-editor'>{ this.props.code }</pre>
          <input type="submit" className='btn' value="Render" />
        </form>
      </div>
    );
  }
});


