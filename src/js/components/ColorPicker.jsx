import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { styled } from 'linaria/react';
import { ChromePicker } from 'react-color';

import Context from '../Context';

import FormControl from '../atoms/FormControl';
import FormInput from '../atoms/FormInput';
import FormLabel from '../atoms/FormLabel';

const pickerOffset = 3;
const PickerWrap = styled.div`
  position: absolute;
  top: 100%;
  left: -${pickerOffset / 2}rem;
  padding: 0 ${pickerOffset}rem ${pickerOffset}rem;
  z-index: 1;
`;
export default class ColorPicker extends Component {
  constructor(props) {
    super(props);
    const { color } = this.props;
    this.state = {
      color,
      show: false,
    };
  }

  handleMouseLeave = () => {
    const { show } = this.state;
    if (show) this.toggleDisplay();
  };

  toggleDisplay = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  handlePickerChange = color => {
    const { type } = this.props;
    const updatedContext = { ...this.context };
    const { updateContext } = this.context;

    this.setState({ color });
    if (!type) return;
    updatedContext[type] = color;
    updateContext(updatedContext);
    document.documentElement.style.setProperty(`--${type}`, color.hex);
  };

  render() {
    const { title } = this.props;
    const { color, show } = this.state;
    return (
      <FormControl onFocus={this.toggleDisplay} onMouseLeave={this.handleMouseLeave}>
        <label htmlFor="colorPicker">
          <FormLabel>{title}</FormLabel>
          <FormInput readOnly value={color.hex} />
          {show && (
            <PickerWrap>
              <ChromePicker disableAlpha color={color} onChange={this.handlePickerChange} />
            </PickerWrap>
          )}
        </label>
      </FormControl>
    );
  }
}

ColorPicker.contextType = Context;

ColorPicker.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.shape({
    hex: PropTypes.string,
    rgb: PropTypes.shape({
      r: PropTypes.number,
      g: PropTypes.number,
      b: PropTypes.number,
    }),
  }),
};

ColorPicker.defaultProps = {
  type: undefined,
  title: 'Colour Picker',
  color: '#000000',
};
