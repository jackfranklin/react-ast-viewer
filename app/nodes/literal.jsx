import React from 'react';

import RenderNodeMixin from '../mixins/render-node-property.jsx!';
import PathMixin from '../mixins/path';

export default React.createClass({
  mixins: [PathMixin, RenderNodeMixin],
  render: function() {
    return (
      <ul>{ this.renderProp('value') }</ul>
    );
  }
});
