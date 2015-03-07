import React from 'react';
import emitter from './event';
import AboutProject from './about.jsx!';

import ace from 'ace';

//TODO: for some reason it doesn't work with import?
var aceRange = require('ace/range');

export default React.createClass({
  highlightRange: function(startRow, startCol, endRow, endCol) {
    var range = new aceRange.Range(...arguments);
    this.marker = this.editor.getSession().addMarker(range, 'code-highlight', 'text', true);
  },
  shouldComponentUpdate: function(nextProps) {
    return false;
  },
  componentDidMount: function() {
    this.editor = ace.edit('ace-editor');
    this.editor.setHighlightActiveLine(false);

    emitter.on('active-node', (node) => {
      this.editor.getSession().removeMarker(this.marker);
      this.highlightRange(
        node.loc.start.line - 1, node.loc.start.column - 1,
        node.loc.end.line - 1, node.loc.end.column - 1);
    });

    emitter.on('deactive-node', (node) => {
      this.editor.getSession().removeMarker(this.marker);
    });
  },
  handleSubmit: function(e) {
    e.preventDefault();
    this.emitChange();
  },
  emitChange: function() {
    var input = this.editor.getValue();
    emitter.emit('input-change', { code: input });
  },
  render: function() {
    return (
      <div>
        <form className="input-form" onSubmit={this.handleSubmit}>
          <input type="submit" className='btn' value="Render" />
          <pre id='ace-editor'>{ this.props.code }</pre>
        </form>
        <AboutProject />
      </div>
    );
  }
});


