import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header className="site-header">
            <div className="container header-inner">
                <Link className="logo" to="/">green<span>mood.</span></Link>
                <nav className="nav">
                    <Link to="/">Главная</Link>
                    <Link to="/catalog">Каталог</Link>
                    <Link to="/product">Продукт</Link>
                </nav>
                <Link className="header-cart" to="/cart">Корзина · 0</Link>
            </div>
        </header>
    )
}
