import s from './Header.module.css';
import { Link, NavLink } from 'react-router';

export function Header() {
    return (
        <header className={s.header}>
            <div className={`container ${s.inner}`}>
                <Link className={s.logo} to="/">green<span>mood.</span></Link>
                <nav className={s.nav}>
                    <Link to="/">Главная</Link>
                    <Link to="/catalog">Каталог</Link>
                    <Link to="/product">Продукт</Link>
                </nav>
                <Link className={s.cart} to="/cart">Корзина · 0</Link>
            </div>
        </header>
    )
}
