import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Context = React.createContext();

export class ContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Colour Contrast Checker',
      bgColour: {
        hex: '#8127db',
        rgb: {
          r: 129,
          g: 39,
          b: 219,
        },
      },
      textColour: {
        hex: '#ffffff',
        rgb: {
          r: 255,
          g: 255,
          b: 255,
        },
      },
      fontSize: 36,
      fontWeight: 700,
      passRatios: {
        AA: {
          normal: 1 / 4.5,
          large: 1 / 3,
        },
        AAA: {
          normal: 1 / 7,
          large: 1 / 4.5,
        },
      },
    };
  }

  updateContext = updatedState => {
    this.setState(prevState => {
      return { ...prevState, ...updatedState };
    });
  };

  render() {
    const { state, updateContext } = this;
    const { children } = this.props;
    return <Context.Provider value={{ ...state, updateContext }}>{children}</Context.Provider>;
  }
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const { Provider, Consumer } = Context;

export default Context;
