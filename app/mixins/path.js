export default {
  parentPath: function() {
    if(!this.props.parentPath) {
      console.warn('Warning: no parentPath set for', this.props.node);
    }
    return this.props.parentPath || '';
  },
  path: function() {
    return `${this.parentPath()}/${this.props.node.type}`
  },
  arrayPath: function(key, index) {
    return `${this.path()}.${key}[${index}]`;
  }
}
