import React, { useContext } from 'react';
import { styled } from 'linaria/react';

import Context from '../Context';

import Fieldset from '../atoms/Fieldset';

import ColorPicker from './ColorPicker';
import InputFontSize from './InputFontSize';
import SelectFontWeight from './SelectFontWeight';

const Form = styled.form`
  position: absolute;
  z-index: 1;
  width: 100%;
  padding: var(--base-unit) 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border-radius: var(--border-radius);

  @media (min-width: 768px) {
    top: var(--base-unit);
    left: var(--base-unit);
    width: 48rem;
  }
`;

export default () => {
  const context = useContext(Context);
  const { bgColour, textColour } = context;

  return (
    <Form>
      <Fieldset>
        <ColorPicker type="textColour" color={textColour} title="Text Colour" />
        <ColorPicker type="bgColour" color={bgColour} title="Background Colour" />
      </Fieldset>
      <Fieldset>
        <InputFontSize />
        <SelectFontWeight />
      </Fieldset>
    </Form>
  );
};
