import { createHashRouter } from 'react-router-dom';
import Index from './pages/Index';

export const router = createHashRouter([
  {
    path: '/',
    element: <Index />,
  }
]);