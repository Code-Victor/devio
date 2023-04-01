import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, Signup } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
