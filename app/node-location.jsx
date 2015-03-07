import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <span className='node-location'>
        Lines {this.props.loc.start.line} to {this.props.loc.end.line}
      </span>
    );
  }
});
