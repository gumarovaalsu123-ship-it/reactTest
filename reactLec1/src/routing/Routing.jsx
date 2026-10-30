import { Route, Routes } from "react-router";
import {HomePage} from '../pages/HomePage/HomePage';
import {CatalogPage} from '../pages/CatalogPage/CatalogPage';
import {PageNotFound} from '../pages/PageNotFound/PageNotFound';
import { ProductPage } from "../pages/ProductPage/ProductPage";

export const PATH = {
    Catalog: "/catalog",
    Product: "/product/:id",
    Home: "/",
    NotFound: "*"
}

export function Routing(){
    return(
        <Routes>
            <Route path={PATH.Home} element={<HomePage/>}/>
            <Route path={PATH.Catalog} element={<CatalogPage/>}/>
            <Route path={PATH.Product} element={<ProductPage/>}/>
            <Route path={PATH.NotFound} element={<PageNotFound/>}/>
        </Routes>
    )
}