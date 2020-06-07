import React from 'react';

import { ContextProvider } from './Context';
import Form from './components/Form';
import Preview from './components/Preview';
import Results from './components/Results';

export default () => {
  return (
    <ContextProvider>
      <main role="main" style={{ display: 'flex', flexFlow: 'column nowrap', minHeight: '100vh' }}>
        <Form />
        <Results />
        <Preview />
      </main>
    </ContextProvider>
  );
};
