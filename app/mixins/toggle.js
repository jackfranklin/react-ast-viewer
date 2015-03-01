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
    //TODO: whenever this gets fired, need to emit event
    // that mian.js can listen to and change the state of allVisible
    this.setState({ visible: !this.state.visible });
  }
};
