import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Main } from './pages/Main/Main';
import { Cart } from './pages/Cart/Cart';
import { Catalog } from './pages/Catalog/Catalog';
import { Product } from './pages/Product/Product';

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
