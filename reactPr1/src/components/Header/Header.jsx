import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header className="site-header">
            <div className="container header-inner">
                <a className="logo" href="index.html">green<span>mood.</span></a>
                <nav className="nav">
                    <Link to="/">Главная</Link>
                    <Link to="/catalog">Каталог</Link>
                    <Link to="/cart">Корзина</Link>
                    <Link to="/product">Продукт</Link>
                    {/* <a href="catalog.html">Каталог</a>
                    <a href="cart.html">Корзина</a> */}
                </nav>
                <a className="header-cart" href="cart.html">Корзина · 0</a>
            </div>
        </header>
    )
}
