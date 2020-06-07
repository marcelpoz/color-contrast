import React, { useContext } from 'react';

import contrast from '../utils/contrast';
import Context from '../Context';

export default () => {
  const context = useContext(Context);
  const { textColour, bgColour, fontSize, passRatios } = context;
  const { AA, AAA } = passRatios;
  const contrastRatio = contrast(textColour.rgb, bgColour.rgb);
  const largeText = fontSize > 18.66;
  const AAPassed = contrastRatio < (largeText ? AA.large : AA.normal);
  const AAAPassed = contrastRatio < (largeText ? AAA.large : AAA.normal);

  return (
    <div>
      <span>Contrast Ratio: 1 : {(1 / contrastRatio).toFixed(2)}</span>
      <span>
        AA:
        {AAPassed ? 'Pass' : 'Fail'}
      </span>
      <span>
        AAA:
        {AAAPassed ? 'Pass' : 'Fail'}
      </span>
    </div>
  );
};
