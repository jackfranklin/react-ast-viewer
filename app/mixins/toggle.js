import emitter from '../event';

export default {
  onToggleAll: function(data) {
    if(data && data.visible) {
      this.setState({ visible: data.visible });
    } else {
      this.setState({ visible: !this.state.visible });
    }
  },
  componentWillUnmount: function() {
    emitter.off('toggle-all', this.onToggleAll);
  },
  componentWillMount: function() {
    emitter.on('toggle-all', this.onToggleAll);
  },
  getInitialState: function() {
    return { visible: false };
  },
  onToggleClick: function() {
    this.setState({ visible: !this.state.visible });
  }
};
