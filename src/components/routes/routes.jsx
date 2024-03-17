import {createBrowserRouter} from "react-router-dom"
import Login from "../../pages/Login"
import Product from "../../pages/Product"
import ProductDescription from "../Product/ProductDescription"
import ShoppingCart from "../../pages/ShoppingCart"

export const appRouter = createBrowserRouter(
    [
        {
            path :"/",
            element : <Product/>
        },
        {
            path :"/login",
            element : <Login/>
        },
        {
            path :"/product/:productSlug",
            element : <ProductDescription/>
        },
        {
            path :"/products",
            element : <Product/>
        },
        {
            path :"/viewcart",
            element : <ShoppingCart/>
        },

    ]
)