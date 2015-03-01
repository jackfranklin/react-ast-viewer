export default {
  parentPath: function() {
    return this.props.parentPath || '';
  },
  path: function() {
    return `${this.parentPath()}/${this.props.node.type}`
  }
}
