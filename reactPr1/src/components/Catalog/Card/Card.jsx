import s from './Card.module.css';
import { Link } from 'react-router';

export function Card(props) {
    return (
        <article className={s.card}>
            <Link className={s.image} to={`/product/${props.id}`}>
                {/* <span className={s.tag}>Хит</span> */}
                <img
                    src={props.image}
                    alt={props.name}
                />
            </Link>

            <div className={s.info}>
                <h3>
                    <Link to={`/product/${props.id}`}>{props.name}</Link>
                </h3>

                <div className={s.bottom}>
                    <span className={s.price}>{props.price} ₽</span>
                    <button className={s.add} aria-label="Добавить в корзину">
                        +
                    </button>
                </div>
            </div>
        </article>
    );
}