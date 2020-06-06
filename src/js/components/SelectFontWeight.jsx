import React, { Component } from 'react';

import Context from '../Context';

export default class SelectFontWeight extends Component {
  handleChange = e => {
    const { updateContext } = this.context;
    const value = e.target.value ? Number(e.target.value) : 700;
    updateContext({ fontWeight: value });
  };

  render() {
    const { fontWeight } = this.context;

    return (
      <div className="form-group">
        <label htmlFor="input-fontstyle">
          Font style:
          <select name="input-fontstyle" defaultValue={fontWeight} onChange={this.handleChange}>
            <option value="100">Light</option>
            <option value="400">Normal</option>
            <option value="700">Bold</option>
            <option value="900">Extra Bold</option>
          </select>
        </label>
      </div>
    );
  }
}

SelectFontWeight.contextType = Context;
