import { BrowserRouter, Routes, Route, Link } from 'react-router';
import './App.css'
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Main } from './pages/Main/Main';
import { Cart } from './pages/Cart/Cart';
import { Catalog } from './pages/Catalog/Catalog';
import { Product } from './pages/Product/Product';
import { Routing } from './routing/Routing';


export function App() {
  return (
      <div className="layout">
        <Header />
        <Routing />
        <Footer />
      </div>
  )
}
