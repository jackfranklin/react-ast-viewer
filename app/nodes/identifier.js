import React from 'react';
import ToggleMixin from '../mixins/toggle';
import PathMixin from '../mixins/path';
import Path from '../path';

export default React.createClass({
  mixins: [ToggleMixin, PathMixin],
  render: function() {
    return (
      <div className='identifer ast-node'>
        <h4 onClick={this.onToggleClick}>Identifier</h4>
        <Path path={this.path()} />
        <ul className={this.state.visible ? 'visible' : 'hidden' }>
          <li><strong>Name</strong>: {this.props.node.name}</li>
        </ul>
      </div>
    );
  }
});
