import s from './Cart.module.css';
import { Link } from 'react-router';

export function Cart() {
    return (
        <main>
            <div className="container">
                <div className={`page-intro ${s.pageIntro}`}>
                    <span className="eyebrow">Ваш выбор</span>
                    <h1>Корзина</h1>
                    <p>Всё, что нужно для вашего зелёного уголка.</p>
                </div>

                <section className={s.layout}>
                    <div className={s.list}>
                        <article className={s.item}>
                            <img
                                src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=300&q=85"
                                alt="Монстера делициоза"
                            />
                            <div className={s.productInfo}>
                                <h3>Монстера делициоза</h3>
                                <p>Комнатные растения · 1 шт.</p>
                                <p className={s.price}>1 890 ₽</p>
                            </div>
                            <strong>1 890 ₽</strong>
                        </article>

                        <article className={s.item}>
                            <img
                                src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=300&q=85"
                                alt="Кашпо Сканди"
                            />
                            <div className={s.productInfo}>
                                <h3>Кашпо «Сканди»</h3>
                                <p>Горшки и кашпо · 1 шт.</p>
                                <p className={s.price}>790 ₽</p>
                            </div>
                            <strong>790 ₽</strong>
                        </article>

                        <p className={s.note}>
                            Демонстрационный пример корзины для макета.
                        </p>
                    </div>

                    <aside className={s.summary}>
                        <h3>Ваш заказ</h3>

                        <div className={s.summaryLine}>
                            <span className="muted">Товары</span>
                            <span>2 680 ₽</span>
                        </div>

                        <div className={s.summaryLine}>
                            <span className="muted">Доставка</span>
                            <span>Бесплатно</span>
                        </div>

                        <div className={`${s.summaryLine} ${s.total}`}>
                            <span>Итого</span>
                            <span>2 680 ₽</span>
                        </div>

                        <button className="btn" type="button">
                            Оформить заказ
                        </button>

                        <Link className={s.textLink} to="/catalog">
                            Продолжить покупки
                        </Link>
                    </aside>
                </section>
            </div>
        </main>
    );
}