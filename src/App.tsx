import react, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, Signup,HomePage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },{
    path: "/home",
    element: <HomePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
