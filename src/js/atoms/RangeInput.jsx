import React from 'react';
import { css } from 'linaria';
import { styled } from 'linaria/react';

import FormInput from './FormInput';

const Wrap = styled.div`
  display: flex;
`;

const Range = styled.input`
  width: 100%;
  margin-right: var(--base-unit);
  background: transparent;
  vertical-align: middle;
  -webkit-appearance: none;
  outline: none;
  border: none;
  padding: 0;

  &::-webkit-slider-runnable-track {
    background-color: var(--bgColour);
    height: 6px;
    border-radius: var(--border-radius);
    border: 1px solid transparent;
  }

  &[disabled]::-webkit-slider-runnable-track {
    border: 1px solid var(--bgColour);
    background-color: transparent;
    opacity: 0.4;
  }

  &::-moz-range-track {
    background-color: var(--bgColour);
    height: 6px;
    border-radius: var(--border-radius);
    border: none;
  }

  &::-ms-track {
    color: transparent;
    border: none;
    background: none;
    height: 6px;
  }

  &::-ms-fill-lower {
    background-color: var(--bgColour);
    border-radius: var(--border-radius);
  }

  &::-ms-fill-upper {
    background-color: var(--bgColour);
    border-radius: var(--border-radius);
  }

  &::-ms-tooltip {
    display: none;
  }

  &::-moz-range-thumb {
    border-radius: 2rem;
    height: 1.6rem;
    width: 1.6rem;
    border: none;
    background: none;
    background-color: #ffffff;
  }

  &:active::-moz-range-thumb {
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    border-radius: 100%;
    background-color: #ffffff;
    height: 18px;
    width: 18px;
    margin-top: -7px;
  }

  &[disabled]::-webkit-slider-thumb {
    background-color: transparent;
    border: 1px solid var(--bgColour);
  }

  &:active::-webkit-slider-thumb {
    outline: none;
  }

  &::-ms-thumb {
    border-radius: 100%;
    background-color: #ffffff;
    height: 18px;
    width: 18px;
    border: none;
  }

  &:active::-ms-thumb {
    border: none;
  }
  width: 100%;
  flex-grow: 1;
`;

const input = css`
  width: 6rem;
  text-align: center;
`;

const RangeInput = props => {
  return (
    <Wrap>
      <Range type="range" {...props} />
      <FormInput type="number" className={input} {...props} />
    </Wrap>
  );
};

export default RangeInput;
