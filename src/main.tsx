import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { dark } from './style/theme';
import GlobalStyles from './style/GlobalStyles';
import GameSetupContext from './context/GameSetupContext';
import GameMenu from './context/GameMenuScreen';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Element);

root.render(
  <React.StrictMode>
    <Router>
        <GameSetupContext>
          <GameMenu>
          <ThemeProvider theme={dark}>
            <GlobalStyles />
            <App />
          </ThemeProvider>
          </GameMenu>
        </GameSetupContext>
    </Router>
  </React.StrictMode>
);
