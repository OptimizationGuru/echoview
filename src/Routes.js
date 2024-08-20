// routes.js
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Body from './components/Body';
import Watch from './components/Watch';
import MainContainer from './components/MainContainer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />,
        children: [
          {
            path: '/',
            element: <MainContainer />,
          },
          {
            path: '/watch',
            element: <Watch />,
          },
        ],
      },
    ],
  },
]);

export default router;
