import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Main } from './components/Main/Main';
import { Cart } from './components/Cart/Cart';
import { Catalog } from './components/Catalog/Catalog';
import { Product } from './components/Product/Product';

export function App() {
  return (
    <BrowserRouter>
      < Header />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product' element={<Product />} />
      </Routes>

      < Footer />
    </ BrowserRouter >

  )
}
