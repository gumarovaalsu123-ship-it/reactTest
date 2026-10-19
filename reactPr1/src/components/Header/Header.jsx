export function Header() {
    return (
        <header className="site-header">
            <div className="container header-inner">
                <a className="logo" href="index.html">green<span>mood.</span></a>
                <nav className="nav">
                    <a className="active" href="index.html">Главная</a>
                    <a href="catalog.html">Каталог</a>
                    <a href="cart.html">Корзина</a>
                </nav>
                <a className="header-cart" href="cart.html">Корзина · 0</a>
            </div>
        </header>
    )
}
