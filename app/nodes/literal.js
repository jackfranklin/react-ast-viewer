import React from 'react';
import ToggleMixin from '../mixins/toggle';

export default React.createClass({
  mixins: [ToggleMixin],
  render: function() {
    return (
      <div className='literal ast-node'>
        <h4 onClick={this.onToggleClick}>Literal</h4>
        <ul className={this.state.visible ? 'visible' : 'hidden' }>
          <li><strong>Value</strong>: { this.props.node.value }</li>
        </ul>
      </div>
    );
  }
});
