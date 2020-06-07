import React, { Component } from 'react';

import Context from '../Context';

export default class InputFontSize extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      displayValue: context.fontSize,
    };
  }

  handleBlur = () => {
    const { fontSize } = this.context;
    this.setState({ displayValue: fontSize });
  };

  handleChange = e => {
    const { updateContext } = this.context;
    const newDisplayValue = e.target.value ? Number(e.target.value) : '';

    let newContextValue = newDisplayValue;
    if (newContextValue && newContextValue < 12) {
      newContextValue = 12;
    } else if (newContextValue && newContextValue > 100) {
      newContextValue = 100;
    }

    this.setState({ displayValue: newDisplayValue });
    updateContext({ fontSize: newContextValue });
  };

  render() {
    const { displayValue } = this.state;
    return (
      <div className="form-group">
        <label htmlFor="fontsize">
          Font size (in px)
          <input
            type="number"
            name="fontsize"
            min="12"
            max="100"
            value={displayValue}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
          <input
            type="range"
            value={displayValue}
            min="12"
            max="100"
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
        </label>
      </div>
    );
  }
}

InputFontSize.contextType = Context;
