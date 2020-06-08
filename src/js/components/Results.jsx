import React, { useContext } from 'react';
import { css } from 'linaria';
import { styled } from 'linaria/react';

import contrast from '../utils/contrast';
import Context from '../Context';

const Results = styled.div`
  position: absolute;
  bottom: var(--base-unit);
  right: var(--base-unit);
  padding: var(--base-unit);
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.75);
  color: #fff;
  border-radius: var(--border-radius);

  @media (min-width: 768px) {
    top: var(--base-unit);
    bottom: auto;
  }
`;

const Result = styled.div`
  display: flex;
  justify-content: space-between;

  > span {
    font-size: var(--font-size-S);
  }
`;

const contrastRatioStyles = css`
  flex-flow: column nowrap;
  margin-bottom: var(--base-unit);
  text-align: center;

  > strong {
    display: block;
    font-size: var(--font-size-L);
    font-weight: bold;
  }
`;

export default () => {
  const context = useContext(Context);
  const { textColour, bgColour, fontSize, passRatios } = context;
  const { AA, AAA } = passRatios;
  const contrastRatio = contrast(textColour.rgb, bgColour.rgb);
  const largeText = fontSize > 18.66;
  const AAPassed = contrastRatio < (largeText ? AA.large : AA.normal);
  const AAAPassed = contrastRatio < (largeText ? AAA.large : AAA.normal);

  return (
    <Results>
      <Result className={contrastRatioStyles}>
        <span>Contrast Ratio: </span>
        <strong className={contrastRatioStyles}>1:{(1 / contrastRatio).toFixed(2)}</strong>
      </Result>
      <Result>
        <span>AA: </span>
        <strong style={{ color: AAPassed ? 'limegreen' : 'red' }}>
          {AAPassed ? '✅ Pass' : '❌ Fail'}
        </strong>
      </Result>
      <Result>
        <span>AAA: </span>
        <strong style={{ color: AAAPassed ? 'limegreen' : 'red' }}>
          {AAAPassed ? '✅ Pass' : '❌ Fail'}
        </strong>
      </Result>
    </Results>
  );
};
