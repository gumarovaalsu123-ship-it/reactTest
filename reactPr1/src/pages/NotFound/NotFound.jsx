import { Link } from 'react-router';
import s from './NotFound.module.css';

export function NotFound() {
    return (
        <main className={s.page}>
            <div className={s.container}>
                <span className={s.eyebrow}>GREEN MOOD</span>

                <div className={s.number}>404</div>

                <h1 className={s.title}>
                    Кажется, здесь ничего не выросло...
                </h1>

                <p className={s.description}>
                    Страница, которую вы ищете, не найдена.
                    Возможно, она переехала или была удалена.
                </p>

                <Link to="/" className={s.button}>
                    Вернуться на главную
                </Link>
            </div>
        </main>
    );
}