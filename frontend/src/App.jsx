import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Something Went Wrong</div>,
  },
  {
    path: "/chat",
    element: <Chat />,
    errorElement: <div>Something Went Wrong</div>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
