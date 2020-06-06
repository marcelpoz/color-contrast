import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ChromePicker } from 'react-color';

import Context from '../Context';

export default class ColorPicker extends Component {
  constructor(props) {
    super(props);
    const { color } = this.props;
    this.state = { color };
  }

  handlePickerChange = color => {
    const { hex } = color;
    const { type } = this.props;
    const updatedContext = { ...this.context };
    const { updateContext } = this.context;

    this.setState({ color: hex });
    if (!type) return;
    updatedContext[type] = color.hex;
    updateContext(updatedContext);
  };

  render() {
    const { title } = this.props;
    const { color } = this.state;

    return (
      <section>
        <h2>{title}</h2>
        <ChromePicker disableAlpha color={color} onChange={this.handlePickerChange} />
      </section>
    );
  }
}

ColorPicker.contextType = Context;

ColorPicker.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
};

ColorPicker.defaultProps = {
  type: undefined,
  title: 'Colour Picker',
  color: '#000000',
};
