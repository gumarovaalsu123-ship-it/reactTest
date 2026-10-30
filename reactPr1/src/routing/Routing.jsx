import { Routes, Route } from 'react-router';
import { Main } from '../pages/Main/Main';
import { Cart } from '../pages/Cart/Cart';
import { Catalog } from '../pages/Catalog/Catalog';
import { Product } from '../pages/Product/Product';
import { NotFound } from '../pages/NotFound/NotFound';

export const PATH = {
    Home: '/',
    Catalog: '/catalog',
    Cart: '/cart',
    Product: '/product/:id',
    NotFound: '*'
}

export function Routing() {
  return (

      <Routes>
        <Route path={PATH.Home} element={<Main />} />
        <Route path={PATH.Catalog} element={<Catalog />} />
        <Route path={PATH.Cart} element={<Cart />} />
        <Route path={PATH.Product} element={<Product />} />
        <Route path={PATH.NotFound} element={< NotFound/>} />
      </Routes>

  )
}

