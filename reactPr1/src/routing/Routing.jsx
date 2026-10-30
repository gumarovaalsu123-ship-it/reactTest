import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Main } from './pages/Main/Main';
import { Cart } from './pages/Cart/Cart';
import { Catalog } from './pages/Catalog/Catalog';
import { Product } from './pages/Product/Product';

export const PATH = {
    Home: '/',
    Catalog: '/catalog',
    Cart: '/cart',
    Product: '/product/:id',
    NotFound: '*'
}



