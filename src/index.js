import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {QueryClient,  QueryClientProvider} from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

const queryClient = new QueryClient();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={
      queryClient
    }>
      <App />
    </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);