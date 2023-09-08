import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './styles/tailwind.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import ErrorPage from './other/error-page';
import Index from './pages/Index';
import ParticlesComponent from './utils/Particles';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Index />,
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'portfolio',
        element: <Portfolio />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root')!);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ParticlesComponent />
    </>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
