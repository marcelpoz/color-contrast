import React, { Component } from 'react';

import Context from '../Context';

import FormControl from '../atoms/FormControl';
import FormLabel from '../atoms/FormLabel';
import RangeInput from '../atoms/RangeInput';

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
      <FormControl>
        <FormLabel>
          Font size <small>(in px)</small>
        </FormLabel>
        <RangeInput
          name="fontsize"
          value={displayValue}
          min="12"
          max="100"
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />
      </FormControl>
    );
  }
}

InputFontSize.contextType = Context;
