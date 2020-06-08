import { styled } from 'linaria/react';

export default styled.div`
  position: relative;
  width: 50%;
  margin: calc(var(--base-unit) / 2) 0;
  padding: 0 var(--base-unit);

  > label {
    display: flex;
    flex-flow: column nowrap;
  }
`;
