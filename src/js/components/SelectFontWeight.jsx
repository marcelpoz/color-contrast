import React, { Component } from 'react';

import Context from '../Context';

import FormControl from '../atoms/FormControl';
import FormLabel from '../atoms/FormLabel';
import SelectInput from '../atoms/SelectInput';

export default class SelectFontWeight extends Component {
  handleChange = e => {
    const { updateContext } = this.context;
    const value = e.target.value ? Number(e.target.value) : 700;
    updateContext({ fontWeight: value });
  };

  render() {
    const { fontWeight } = this.context;

    return (
      <FormControl>
        <FormLabel>Font weight</FormLabel>
        <SelectInput defaultValue={fontWeight} onChange={this.handleChange}>
          <option value="100">Light</option>
          <option value="400">Normal</option>
          <option value="700">Bold</option>
          <option value="900">Extra Bold</option>
        </SelectInput>
      </FormControl>
    );
  }
}

SelectFontWeight.contextType = Context;
