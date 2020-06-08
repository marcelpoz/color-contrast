import React from 'react';
import { styled } from 'linaria/react';

import { ContextProvider } from './Context';
import Footer from './components/Footer';
import Form from './components/Form';
import Preview from './components/Preview';
import Results from './components/Results';
import Root from './components/Root';

const Main = styled.main`
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
`;

export default () => {
  return (
    <ContextProvider>
      <Root>
        <Main>
          <Form />
          <Results />
          <Preview />
        </Main>
        <Footer />
      </Root>
    </ContextProvider>
  );
};
