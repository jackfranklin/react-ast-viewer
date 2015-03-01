export default {
  onMouseEnter: function(e) {
    e.stopPropagation();
    this.setState({ isFocused: true });
  },
  onMouseLeave: function(e) {
    e.stopPropagation();
    this.setState({ isFocused: false });
  },
}
