import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { PresentationsDct } from './app/presentations-dct';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <PresentationsDct />
  </StrictMode>
);
