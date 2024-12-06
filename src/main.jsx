import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Services from './components/Services/Services.jsx';
import Contact from './components/Contact/Contact.jsx';
import See from './components/See_Detail/See.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <h1>Page Not Found</h1>,
    children: [
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/product/:id",
        element:<See />
      },
      
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/services",
        element:<Services />
      },
      {
        path:"/contact",
        element:<Contact />
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
