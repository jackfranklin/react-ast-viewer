import React from 'react';

export default React.createClass({
  render: function() {
    return <code className='path'>{this.props.path}</code>;
  }
});
