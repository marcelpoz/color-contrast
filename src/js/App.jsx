import React from 'react';

import { ContextProvider } from './Context';
import Preview from './components/Preview';
import ConfigForm from './components/ConfigForm';

export default () => {
  return (
    <ContextProvider>
      <main role="main" style={{ display: 'flex', flexFlow: 'column nowrap', minHeight: '100vh' }}>
        <Preview />
        <ConfigForm />
      </main>
    </ContextProvider>
  );
};
