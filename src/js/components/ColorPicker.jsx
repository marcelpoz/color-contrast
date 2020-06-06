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
    const { type } = this.props;
    const updatedContext = { ...this.context };
    const { updateContext } = this.context;

    this.setState({ color });
    if (!type) return;
    updatedContext[type] = color;
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
  color: PropTypes.shape({
    hex: PropTypes.string.isRequired,
    r: PropTypes.number.isRequired,
    g: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
  }),
};

ColorPicker.defaultProps = {
  type: undefined,
  title: 'Colour Picker',
  color: '#000000',
};
