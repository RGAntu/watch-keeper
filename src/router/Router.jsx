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
            loader: () => fetch("Products.json")
        },
        {
          path:"productDetail/:id",
          Component: ProductDetail,


        }
      
    ]
  },
]);

export default router;