import { createBrowserRouter } from "react-router";

import Home from "../page/Home/Home";
import Root from "../layout/Root";
import ProductDetail from "../page/ProdectDetail/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
        {
            index: true,
            Component: Home,
            hydrateFallbackElement: <p>Products are Loading....</p>,
            loader: () => fetch("../Products.json")
        },
        {
          path:"productDetail/:id",
          loader: () => fetch("../Products.json"),
          Component: ProductDetail,



        }
      
    ]
  },
]);

export default router;