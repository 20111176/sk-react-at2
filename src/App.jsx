import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
// Import necessary page components
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import NewsPage from './pages/NewsPage';
import RegionsPage from './pages/RegionsPage';
import NotFoundPage from './pages/NotFoundPage';

/**
 * Define the application routes.
 *
 * This code sets up the routing configuration for this React app using the `react-router-dom` library.
 * It defines the main routes for our application, including the homepage, contact page, news page, regions page,
 * and a catch-all route for any unknown URLs that will redirect to the not found page.
 */
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/news' element={<NewsPage />} />
      <Route path='/regions' element={<RegionsPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
