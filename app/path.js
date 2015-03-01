import React from 'react';

export default React.createClass({
  render: function() {
    console.log('props', this.props);
    return (
      <div className='path'>
        <code className={this.props.visible ? 'visible' : 'hidden'}>{this.props.path}</code>
      </div>
    );
  }
});
