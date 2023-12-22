import React from 'react'
import ReactDOM from 'react-dom/client'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main/Main';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
