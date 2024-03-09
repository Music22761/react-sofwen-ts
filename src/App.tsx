import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./page/home";
import EditPage from "./page/edit";
import AddPage from "./page/add";

const routers = createBrowserRouter([
  { path: "/", element: <HomePage></HomePage> },
  { path: "/edit", element: <EditPage></EditPage> },
  { path: "/adduser", element: <AddPage></AddPage> },
]);
function App() {
  return <RouterProvider router={routers} />;
}

export default App;
