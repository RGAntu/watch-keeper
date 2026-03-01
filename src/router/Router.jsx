import { createBrowserRouter } from "react-router";

import Home from "../page/Home/Home";
import Root from "../layout/Root";
import ProductDetail from "../page/ProdectDetail/ProductDetail";
import Favorite from "../page/Favorite/Favorite";
import Cart from "../page/Cart/Cart";
import Error from "../components/Error/Error";


const router = createBrowserRouter([
  {
    path: "/",
    ErrorBoundary: Error,
    Component: Root,
    children:[
        {
            index: true,
            Component: Home,
            hydrateFallbackElement: <p className="text-center py-12">Products are Loading....</p>,
            loader: () => fetch("../Products.json")
        },
        {
          path:"productDetail/:id",
          loader: () => fetch("../Products.json"),
          hydrateFallbackElement: <p className="text-center py-12">Products are Loading....</p>,
          Component: ProductDetail,



        },
        {
          path:"favorite",
          Component: Favorite
        },
        {
          path:"cart",
          Component: Cart
        }
      
      
    ]
  },
]);

export default router;