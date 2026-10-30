import s from './Product.module.css';
import { Link } from 'react-router';

export function Product() {
    return (
        <main>
            <div className={`container ${s.container}`}>
                <div className={s.breadcrumbs}>
                    <Link to="/">Главная</Link> /{' '}
                    <Link to="/catalog">Каталог</Link> / Монстера делициоза
                </div>

                <section className={s.detail}>
                    <div className={s.image}>
                        <img
                            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1100&q=90"
                            alt="Монстера делициоза в горшке"
                        />
                    </div>

                    <div className={s.copy}>
                        <span className="eyebrow">Комнатные растения</span>
                        <h1>Монстера делициоза</h1>
                        <p className="muted">Артикул: GM-001 · В наличии</p>

                        <div className={s.price}>1 890 ₽</div>

                        <p className={s.description}>
                            Эффектное тропическое растение с крупными резными
                            листьями. Монстера станет выразительным акцентом
                            в гостиной, спальне или рабочем пространстве и
                            добавит интерьеру природной свежести.
                        </p>

                        <ul className={s.points}>
                            <li>Высота растения: около 35–45 см</li>
                            <li>Рассеянный свет без прямого солнца</li>
                            <li>Полив после подсыхания верхнего слоя почвы</li>
                        </ul>

                        <div className={s.actions}>
                            <button className="btn" type="button">
                                Добавить в корзину
                            </button>
                            <Link className="btn btn-outline" to="/catalog">
                                Вернуться в каталог
                            </Link>
                        </div>

                        <p className={s.note}>
                            Растение может немного отличаться от фотографии —
                            каждое по-своему уникально.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}