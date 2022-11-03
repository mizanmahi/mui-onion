import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';

const router = createBrowserRouter([
   {
      path: '/',
      element: <Layout />,
      children: [
         {
            path: '/',
            element: <Home />,
         },
      ],
   },
]);

function App() {
   return (
      <div className='App'>
         <RouterProvider router={router} />
      </div>
   );
}

export default App;
