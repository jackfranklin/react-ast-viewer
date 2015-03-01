import React from 'react';
import emitter from '../event';

export default {
  componentWillMount: function() {
    emitter.on('toggle-all', function() {
      this.setState({ visible: !this.state.visible });
    }.bind(this));
  },
  getInitialState: function() {
    return { visible: false };
  },
  onToggleClick: function() {
    this.setState({ visible: !this.state.visible });
  }
};
