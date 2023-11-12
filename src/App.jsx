import "./App.css";
import Home from "./components/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Recipes from "./components/recipes/Recipes";
import Tips from "./components/Tips";
import About from "./components/About";
import Contact from "./components/Contact";

import "bootstrap/dist/css/bootstrap.min.css";
import RecipesData from "./components/recipes/RecipesData";
import DetailsPage from "./components/recipes/DetailsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/recipes", element: <Recipes />, },
        { path: "/recipes/:id", element: <DetailsPage /> },
        { path: "tips", element: <Tips /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
