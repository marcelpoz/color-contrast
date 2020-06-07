import React, { useContext } from 'react';

import Context from '../Context';

const Preview = () => {
  const context = useContext(Context);
  const { bgColour, fontSize, fontWeight, textColour } = context;
  return (
    <section
      style={{
        position: 'relative',
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: bgColour.hex || '#FFFFFF',
        flexGrow: 1,
      }}
    >
      <span
        // contentEditable
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          padding: '3.6rem',
          textAlign: 'center',
          background: 'transparent',
          border: 0,
          color: textColour.hex || '#000000',
          fontSize,
          fontWeight: fontWeight || 400,
        }}
      >
        Colour Contrast Checker
      </span>
    </section>
  );
};

export default Preview;
