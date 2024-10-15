import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import DashboardLayout from './layouts/DashboardLayout';
import Tournament from './components/Tournament';
import LoginPage from './pages/LoginPage';
import Ruleset from './components/Ruleset';
import Pickem from './components/Pickem';

// Define the routes using createRoutesFromElements
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<HomeLayout />}>
      <Route index element={<HomePage />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='Tournament' element={<Tournament />} />
      <Route path='Ruleset' element={<Ruleset/> } />
      <Route path='Pickem' element={<Pickem />} />
      <Route path='/dashboard' element={<DashboardLayout /> } >
        <Route index element={<DashboardPage/>} />
        </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;