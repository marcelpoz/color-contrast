import React, { useContext } from 'react';
import { css } from 'linaria';

import Context from '../Context';

const Preview = () => {
  const context = useContext(Context);
  const { bgColour, fontSize, fontWeight, textColour } = context;

  const wrap = css`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    text-align: center;

    > span {
      padding: 3.6rem;
    }
  `;

  return (
    <section
      className={wrap}
      style={{ backgroundColor: bgColour.hex, color: textColour.hex, fontSize, fontWeight }}
    >
      <span>Colour Contrast Checker</span>
    </section>
  );
};

export default Preview;
