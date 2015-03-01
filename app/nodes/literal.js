import React from 'react';
import ToggleMixin from '../mixins/toggle';
import Path from '../path';
import PathMixin from '../mixins/path';

export default React.createClass({
  mixins: [ToggleMixin, PathMixin],
  render: function() {
    return (
      <div className='literal ast-node'>
        <h4 onClick={this.onToggleClick}>Literal</h4>
        <Path path={this.path()} />
        <ul className={this.state.visible ? 'visible' : 'hidden' }>
          <li><strong>Value</strong>: { this.props.node.value }</li>
        </ul>
      </div>
    );
  }
});
