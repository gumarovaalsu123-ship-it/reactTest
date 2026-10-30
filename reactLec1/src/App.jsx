import { Header } from "./components/Header/Header"; //именованный - в {} 
import { Footer } from "./components/Footer/Footer";
import { Banner } from "./components/Banner/Banner";
import { Catalog } from "./components/Catalog/Catalog";
import { Routing } from "./routing/Routing";

export function App() { //компонента, именнованный - принятие по имени, можно много
  return (
    <div className="layout">
      <Header />
        <Routing/>
      <Footer />
    </div>
  )
}

// export default App //по умолчанию - только один и принять можно под любым именем
