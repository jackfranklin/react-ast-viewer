import React from 'react';
import _ from 'lodash';
import componentFinder from './node-component-finder';
import ToggleMixin from './mixins/toggle';
import Path from './path.jsx!';
import PathMixin from './mixins/path';
import emitter from './event';
import NodeLocation from './node-location.jsx!';

import NULL_NODE_TYPES from './null-nodes';

export default React.createClass({
  mixins: [ToggleMixin, PathMixin],
  onMouseEnter: function(e) {
    e.stopPropagation();
    emitter.emit('active-node', this.props.node);
    this.setState({ isFocused: true });
  },
  onMouseLeave: function(e) {
    e.stopPropagation();
    emitter.emit('deactive-node', this.props.node);
    this.setState({ isFocused: false });
  },
  getRenderedContent: function() {
    if(this._content) return this._content;

    var newElementComponent = componentFinder(this.props.node.type);

    if(newElementComponent) {
      this._content = React.createElement(newElementComponent, this.props);
      return this._content;
    } else {
      console.err('No element found for node', this.props.node);
    }
  },
  isNullNode: function() {
    return NULL_NODE_TYPES.indexOf(this.props.node.type) > -1;
  },
  renderKey: function() {
    if(!this.props.nodeKey) return null;

    return `${this.props.nodeKey}: `;
  },
  renderHeading: function() {
    return (
      <h4>{this.renderKey()}{ this.props.node.type }
        <NodeLocation loc={this.props.node.loc} />
      </h4>
    );
  },
  renderContent: function() {
    if(this.isNullNode()) return null;

    if(!this.state.visible) return null;

    return this.getRenderedContent();
  },
  renderToggle: function() {
    var internalText = this.state.visible ?  '-' : '+';
    if(this.isNullNode()) return null;
    return (
      <a href="#" className='toggle-icon' onClick={this.onToggleClick}>
        { internalText }
      </a>
    );
  },
  render: function() {
    var outputProperties = this.getRenderedContent();

    return (
      <div className={`ast-node ${this.props.node.type}`} onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter}>
        <Path path={this.path()} visible={this.state.isFocused} />
        <div className='ast-node-head'>
          { this.renderToggle() }

          { this.renderHeading() }
        </div>
        <div className='ast-node-children'>
          { this.renderContent() }
        </div>
      </div>
    );
  }
});
