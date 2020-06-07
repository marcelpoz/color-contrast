import React, { useContext } from 'react';

import Context from '../Context';

import ColorPicker from './ColorPicker';
import InputFontSize from './InputFontSize';
import SelectFontWeight from './SelectFontWeight';

export default () => {
  const context = useContext(Context);
  const { bgColour, textColour } = context;

  return (
    <form
      style={{
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      <ColorPicker type="textColour" color={textColour} title="Text Colour" />
      <ColorPicker type="bgColour" color={bgColour} title="Background Colour" />
      <InputFontSize />
      <SelectFontWeight />
    </form>
  );
};
