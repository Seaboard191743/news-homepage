import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import { LayOut } from './pages/layout/LayOut';
import { HomePage } from './pages/homepage/HomePage';
import { Placeholder } from './pages/placeholder/Placeholder';
import './app.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<LayOut />}>
      <Route index element={<HomePage />} />
      <Route path='*' element={<Placeholder />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
