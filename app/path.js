import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className='path'>
        <code className={this.props.visible ? 'visible' : 'hidden'}>{this.props.path}</code>
      </div>
    );
  }
});
