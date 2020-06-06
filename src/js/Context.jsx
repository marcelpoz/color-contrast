import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Context = React.createContext();

export class ContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      bgColour: '#2a6ab4',
      textColour: '#000000',
      fontSize: 36,
      fontWeight: 700,
      title: 'Colour Contrast Checker',
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
