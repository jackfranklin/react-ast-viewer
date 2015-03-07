import React from 'react';
import aboutText from './about-text.html!text';

export default React.createClass({
  render: function() {
    return (
      <div className='about' dangerouslySetInnerHTML={{__html: aboutText}}>
      </div>
    )
  }
});
