import s from './Card.module.css';
import { Link } from 'react-router';

export function Card() {
    return (
        <article className={s.card}>
            <Link className={s.image} to="/product/1">
                <span className={s.tag}>Хит</span>
                <img
                    src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=85"
                    alt="Монстера"
                />
            </Link>

            <div className={s.info}>
                <h3>
                    <Link to="/product/1">Монстера делициоза</Link>
                </h3>

                <div className={s.bottom}>
                    <span className={s.price}>1 890 ₽</span>
                    <button className={s.add} aria-label="Добавить в корзину">
                        +
                    </button>
                </div>
            </div>
        </article>
    );
}