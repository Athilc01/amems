// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store'; // Import the store
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>

      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>
  </BrowserRouter>,
);
