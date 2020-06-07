import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ChromePicker } from 'react-color';

import Context from '../Context';

export default class ColorPicker extends Component {
  constructor(props) {
    super(props);
    const { color } = this.props;
    this.state = {
      color,
      show: false,
    };
  }

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
  };

  render() {
    const { title } = this.props;
    const { color, show } = this.state;
    return (
      <section>
        <div
          style={{ position: 'relative' }}
          onMouseEnter={this.toggleDisplay}
          onMouseLeave={this.toggleDisplay}
        >
          <label htmlFor="colorPicker">
            <span>{title}</span>
            <input readOnly value={color.hex} />
            <div style={{ display: show ? 'block' : 'none', position: 'absolute', zIndex: 1 }}>
              <ChromePicker disableAlpha color={color} onChange={this.handlePickerChange} />
            </div>
          </label>
        </div>
      </section>
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
