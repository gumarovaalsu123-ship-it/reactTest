import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner';
import { Catalog } from './components/Catalog/Catalog';
import { Footer } from './components/Footer/Footer';

export function App() {
  return (
    <div className="layout">
      <Header />

      <Banner />
      
      <Catalog />

      <Footer />
    </div>
  )
}
