import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'jotai';
import App from './App';
// import './index.css';
import './styles/global.scss';
import theme from './theme';

const Main: React.FC = () => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Provider>
          <App />
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById('root');

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);

root.render(<Main />);
