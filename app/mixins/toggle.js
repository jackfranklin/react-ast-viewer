import React from 'react';
import emitter from '../event';

export default {
  componentWillMount: function() {
    emitter.on('toggle-all', function(data) {
      if(data && data.visible) {
        this.setState({ visible: data.visible });
      } else {
        this.setState({ visible: !this.state.visible });
      }
    }.bind(this));
  },
  getInitialState: function() {
    return { visible: false };
  },
  onToggleClick: function() {
    this.setState({ visible: !this.state.visible });
  }
};
