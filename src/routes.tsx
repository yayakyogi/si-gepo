/*  eslint-disable react/react-in-jsx-scope */
import HomePage from '@pages/home';
import LoginPage from '@pages/login';
import MaterialPage from '@pages/material';
import MaterialDetailPage from '@pages/material/detail';
import MaterialQuestionsPage from '@pages/material/question';
import OnBoardPage from '@pages/onboard';
import { RouteObject } from 'react-router-dom';

export default [
  {
    path: '/',
    element: <OnBoardPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/homepage',
    element: <HomePage />,
  },
  {
    path: '/material',
    children: [
      {
        index: true,
        element: <MaterialPage />,
      },
      {
        path: ':id',
        children: [
          {
            index: true,
            element: <MaterialDetailPage />,
          },
          {
            path: 'quiz',
            element: <MaterialQuestionsPage />,
          },
        ],
      },
    ],
  },
] as RouteObject[];
