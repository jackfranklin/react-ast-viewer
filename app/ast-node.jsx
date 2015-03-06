import React from 'react';
import _ from 'lodash';
import componentFinder from './node-component-finder';
import ToggleMixin from './mixins/toggle';
import Path from './path.jsx!';
import PathMixin from './mixins/path';
import emitter from './event';

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
  isNoNullType: function() {
    return NULL_NODE_TYPES.indexOf(this.props.node.type) > -1;
  },
  renderHeading: function() {
    return (
      <h4 className={this.isNoNullType() ? '' : 'expand-heading'}
        onClick={this.onToggleClick}>
        { this.props.node.type }
      </h4>
    );
  },
  renderContent: function() {
    if(this.isNoNullType()) {
      return null;
    }

    return (
      <div className={this.state.visible ? 'visible' : 'hidden' }>
        { this.getRenderedContent() }
      </div>
    );
  },
  render: function() {
    var outputProperties = this.getRenderedContent();

    return (
      <div className={`ast-node ${this.props.node.type}`} onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter}>
        { this.renderHeading() }
        <Path path={this.path()} visible={this.state.isFocused} />
        { this.renderContent() }
      </div>
    );
  }
});
