import React from 'react';

export default {
  getInitialState: function() {
    return { visible: false };
  },
  onToggleClick: function() {
    this.setState({ visible: !this.state.visible });
  }
};
