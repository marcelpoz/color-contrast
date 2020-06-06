import React, { Component } from 'react';

import Context from '../Context';

export default class InputFontSize extends Component {
  handleChange = e => {
    const { updateContext } = this.context;
    const value = e.target.value ? Number(e.target.value) : '';
    updateContext({ fontSize: value });
  };

  render() {
    const { fontSize } = this.context;

    return (
      <div className="form-group">
        <label htmlFor="fontsize">
          Font size (in px)
          <input type="number" name="fontsize" value={fontSize} onChange={this.handleChange} />
        </label>
      </div>
    );
  }
}

InputFontSize.contextType = Context;
