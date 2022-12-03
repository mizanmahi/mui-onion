import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import CssBaseline from '@mui/material/CssBaseline';
import Register from './pages/Register/Register';
import AuthContextProvider from './context/AuthContextProvider';
import Login from './pages/Login/Login';
import MealDetails from './pages/MealDetails/MealDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CartContextProvider from './context/CartContextProvider';
import Checkout from './pages/Checkout/Checkout';

const router = createBrowserRouter([
   {
      path: '/',
      element: <Layout />,
      children: [
         {
            path: '/',
            element: <Home />,
         },
         {
            path: '/register',
            element: <Register />,
         },
         {
            path: '/login',
            element: <Login />,
         },
         {
            path: '/meal-details/:mealId',
            element: (
               <PrivateRoute>
                  <MealDetails />
               </PrivateRoute>
            ),
         },
         {
            path: '/checkout',
            element: (
               <PrivateRoute>
                  <Checkout />
               </PrivateRoute>
            ),
         },
      ],
   },
]);

function App() {
   return (
      <div className='App'>
         <AuthContextProvider>
            <CartContextProvider>
               <CssBaseline />
               <RouterProvider router={router} />
            </CartContextProvider>
         </AuthContextProvider>
      </div>
   );
}

export default App;
