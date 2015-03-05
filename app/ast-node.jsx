import React from 'react';
import _ from 'lodash';
import componentFinder from './node-component-finder';
import ToggleMixin from './mixins/toggle';
import Path from './path.jsx!';
import PathMixin from './mixins/path';
import MouseFocusMixin from './mixins/mouse-focus';

export default React.createClass({
  mixins: [ToggleMixin, PathMixin, MouseFocusMixin],
  render: function() {
    console.log('rendering', this.props.node);
    var newElementComponent = componentFinder(this.props.node.type);

    if(newElementComponent) {
      var outputProperties = React.createElement(newElementComponent, this.props);
    } else {
      console.err('No element found for node', this.props.node);
    }

    return outputProperties ? (
      <div className={`ast-node ${this.props.node.type}`} onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter}>
        <h4 onClick={this.onToggleClick}>{this.props.node.type}</h4>
        <Path path={this.path()} visible={this.state.isFocused} />
        <div className={this.state.visible ? 'visible' : 'hidden' }>
          { outputProperties }
        </div>
      </div>
    ) : null;
  }
});
