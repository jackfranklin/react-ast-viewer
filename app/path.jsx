import React from 'react';

export default React.createClass({
  render: function() {
    if(!this.props.visible) return null;

    return (
      <div className='path'>
        <code>{this.props.path}</code>
      </div>
    );
  }
});
