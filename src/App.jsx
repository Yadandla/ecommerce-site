import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import Applayout from "./components/Applayout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import './Responsive.css';
import { Shop } from "./pages/Shop";
import { Cart } from "./pages/Cart";
import { Wishlist } from "./pages/Wishlist";
import { StoreProvider } from "./pages/StoreProvider";
import { Account } from "./pages/Account";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/wishlist",
          element: <Wishlist />,
        },
        {
          path: "/account",
          element: <Account />,
        },
      ]
    }
  ]);

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/contact" element={<Contact />} />
  //     </Route>
  //   )
  // )

  return (
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  )

};

export default App;