import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // children: [

    // ]
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
