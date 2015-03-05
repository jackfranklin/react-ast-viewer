import React from 'react';
import RenderNodeMixin from '../mixins/render-node-property.jsx!';

export default React.createClass({
  mixins: [RenderNodeMixin],
  render: function() {
    return (
      <ul> { this.renderProp('name') }</ul>
    );
  }
});
