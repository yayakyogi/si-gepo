/*  eslint-disable react/react-in-jsx-scope */
import HomePage from '@pages/home';
import LoginPage from '@pages/login';
import MaterialPage from '@pages/material';
import MaterialDetailPage from '@pages/material/detail';
import MaterialQuestionsPage from '@pages/material/question';
import OnBoardPage from '@pages/onboard';
import ManualBookPage from '@pages/manual-book';
import { RouteObject } from 'react-router-dom';
import RulePage from '@pages/rule';
import RegisterPage from '@pages/register';
import MaterialQuestionQuizPage from '@pages/material/question/quiz';

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
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/homepage',
    element: <HomePage />,
  },
  {
    path: '/manual-book',
    element: <ManualBookPage />,
  },
  {
    path: '/rule',
    element: <RulePage />,
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
            children: [
              {
                index: true,
                element: <MaterialQuestionsPage />,
              },
              {
                path: 'question',
                element: <MaterialQuestionQuizPage />,
              },
            ],
          },
        ],
      },
    ],
  },
] as RouteObject[];
