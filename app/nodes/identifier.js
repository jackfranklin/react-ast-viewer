import React from 'react';
import ToggleMixin from '../mixins/toggle';

export default React.createClass({
  mixins: [ToggleMixin],
  render: function() {
    return (
      <div className='identifer ast-node'>
        <h4 onClick={this.onToggleClick}>Identifier</h4>
        <ul className={this.state.visible ? 'visible' : 'hidden' }>
          <li><strong>Name</strong>: {this.props.node.name}</li>
        </ul>
      </div>
    );
  }
});
