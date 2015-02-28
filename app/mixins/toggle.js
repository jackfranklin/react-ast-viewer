import React from 'react';

export default {
  getInitialState: function() {
    return { visible: true };
  },
  onToggleClick: function() {
    this.setState({ visible: !this.state.visible });
  }
};
