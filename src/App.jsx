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
import TestPage from './pages/TestPage';
import TestFooter from './pages/TestFooter';
import TestCardArticles from './pages/TestCardArticles';
import TestHeader from './pages/TestHeader';

/**
 * Define the application routes.
 *
 * This code sets up the routing configuration for this React app using the `react-router-dom` library.
 * It defines the main routes for our application, including the homepage, contact page, news page, regions page,
 * and a catch-all route for any unknown URLs that will redirect to the not found page.
 */

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/sk-react-at2/' element={<MainLayout />}>
      <Route path='/sk-react-at2/' element={<TestPage />} />
      <Route path='/sk-react-at2/testcard' element={<TestCardArticles />} />
      <Route path='/sk-react-at2/testfooter' element={<TestFooter />} />
      <Route path='/sk-react-at2/testheader' element={<TestHeader />} />
      <Route path='/sk-react-at2/home' element={<HomePage />} />
      <Route path='/sk-react-at2/contact' element={<ContactPage />} />
      <Route path='/sk-react-at2/news' element={<NewsPage />} />
      <Route path='/sk-react-at2/regions' element={<RegionsPage />} />
      <Route path='/sk-react-at2/*' element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
