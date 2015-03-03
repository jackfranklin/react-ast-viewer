import emitter from '../event';

export default {
  onToggleAll: function(data) {
    if(data && data.visible) {
      this.setState({ visible: data.visible });
    } else {
      this.setState({ visible: !this.state.visible });
    }
  },
  componentWillMount: function() {
    emitter.on('toggle-all', this.onToggleAll);
  },
  getInitialState: function() {
    return { visible: false };
  },
  componentWillUnmount: function() {
    emitter.off('toggle-all', this.onToggleAll);
  },
  onToggleClick: function() {
    this.setState({ visible: !this.state.visible });
  }
};
