import s from './Footer.module.css';
import { Link } from 'react-router';

export function Footer() {
    return (
        <footer className={s.footer}>
            <div className={`container ${s.inner}`}>
                <div>
                    <Link className={s.logo} to="/">
                        green<span>mood.</span>
                    </Link>
                    <p>Растения для дома и хорошего настроения.</p>
                </div>

                <div className={s.links}>
                    <Link to="/">Главная</Link>
                    <Link to="/catalog">Каталог</Link>
                    <Link to="/cart">Корзина</Link>
                </div>

                <p>© 2026 Green Mood</p>
            </div>
        </footer>
    );
}