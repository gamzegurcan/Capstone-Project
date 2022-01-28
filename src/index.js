import React from 'react';
import ReactDOM from 'react-dom';
import {QueryClient,  QueryClientProvider} from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import{ store, persistor } from './reduxStore';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const queryClient = new QueryClient();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading= {<h1>Loading...</h1>} persistor={persistor} >
          <QueryClientProvider client={
            queryClient
          }>
            <App />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);