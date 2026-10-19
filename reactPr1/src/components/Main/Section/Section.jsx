import s from './Section.module.css';

export function Section() {
    return (
        <section className="section">
            <div className="container">
                <div className={s.sectionHeading}>
                    <div><span className="eyebrow">Выбор недели</span><h2>Зелёные фавориты</h2></div>
                    <a className={s.textLink} href="catalog.html">Все товары ↗</a>
                </div>
                <div className={s.productGrid}>
                    <article className={s.productCard}>
                        <a className={s.productImage} href="product.html"><span className={s.productTag}>Хит</span><img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=85" alt="Монстера" /></a>
                        <div className={s.productInfo}><h3><a href="product.html">Монстера делициоза</a></h3><div className={s.productBottom}><span className={s.price}>1 890 ₽</span><button className={s.addSmall} aria-label="Добавить в корзину">+</button></div></div>
                    </article>
                    <article className={s.productCard}>
                        <a className={s.productImage} href="product.html"><img src="https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=85" alt="Сансевиерия" /></a>
                        <div className={s.productInfo}><h3><a href="product.html">Сансевиерия</a></h3><div className={s.productBottom}><span className={s.price}>1 290 ₽</span><button className={s.addSmall} aria-label="Добавить в корзину">+</button></div></div>
                    </article>
                    <article className={s.productCard}>
                        <a className={s.productImage} href="product.html"><span className={s.productTag}>Новинка</span><img src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=85" alt="Растение в горшке" /></a>
                        <div className={s.productInfo}><h3><a href="product.html">Фикус эластика</a></h3><div className={s.productBottom}><span className={s.price}>2 150 ₽</span><button className={s.addSmall} aria-label="Добавить в корзину">+</button></div></div>
                    </article>
                    <article className={s.productCard}>
                        <a className={s.productImage} href="product.html"><img src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=85" alt="Небольшое комнатное растение" /></a>
                        <div className={s.productInfo}><h3><a href="product.html">Эпипремнум</a></h3><div className={s.productBottom}><span className={s.price}>990 ₽</span><button className={s.addSmall} aria-label="Добавить в корзину">+</button></div></div>
                    </article>
                </div>
            </div>
        </section>
    )
}

