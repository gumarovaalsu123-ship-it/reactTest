export function Main() {
    return (
        <main>
            <section className="hero">
                <div className="container hero-grid">
                    <div className="hero-copy">
                        <span className="eyebrow">Больше природы рядом</span>
                        <h1>Добавьте в дом немного <em>зелёного.</em></h1>
                        <p>Комнатные растения и красивые детали, которые делают пространство уютнее. Найдите своего зелёного любимца.</p>
                        <a className="btn" href="catalog.html">Перейти в каталог <span aria-hidden="true">↗</span></a>
                    </div>
                    <div className="hero-image">
                        <img src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1100&q=85" alt="Уютный интерьер с комнатными растениями" />
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-heading">
                        <div><span className="eyebrow">Выбор недели</span><h2>Зелёные фавориты</h2></div>
                        <a className="text-link" href="catalog.html">Все товары ↗</a>
                    </div>
                    <div className="product-grid">
                        <article className="product-card">
                            <a className="product-image" href="product.html"><span className="product-tag">Хит</span><img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=85" alt="Монстера" /></a>
                            <div className="product-info"><h3><a href="product.html">Монстера делициоза</a></h3><div className="product-bottom"><span className="price">1 890 ₽</span><button className="add-small" aria-label="Добавить в корзину">+</button></div></div>
                        </article>
                        <article className="product-card">
                            <a className="product-image" href="product.html"><img src="https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=85" alt="Сансевиерия" /></a>
                            <div className="product-info"><h3><a href="product.html">Сансевиерия</a></h3><div className="product-bottom"><span className="price">1 290 ₽</span><button className="add-small" aria-label="Добавить в корзину">+</button></div></div>
                        </article>
                        <article className="product-card">
                            <a className="product-image" href="product.html"><span className="product-tag">Новинка</span><img src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=85" alt="Растение в горшке" /></a>
                            <div className="product-info"><h3><a href="product.html">Фикус эластика</a></h3><div className="product-bottom"><span className="price">2 150 ₽</span><button className="add-small" aria-label="Добавить в корзину">+</button></div></div>
                        </article>
                        <article className="product-card">
                            <a className="product-image" href="product.html"><img src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=85" alt="Небольшое комнатное растение" /></a>
                            <div className="product-info"><h3><a href="product.html">Эпипремнум</a></h3><div className="product-bottom"><span className="price">990 ₽</span><button className="add-small" aria-label="Добавить в корзину">+</button></div></div>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section section-soft">
                <div className="container">
                    <div className="section-heading"><div><span className="eyebrow">Почему Green Mood</span><h2>Уют начинается с деталей</h2></div></div>
                    <div className="benefits">
                        <article className="benefit"><h3>Здоровые растения</h3><p>Тщательно выбираем растения и бережно готовим их к отправке.</p></article>
                        <article className="benefit"><h3>Бережная доставка</h3><p>Упаковываем каждый заказ так, чтобы он доехал в отличном состоянии.</p></article>
                        <article className="benefit"><h3>Простой уход</h3><p>Подскажем, как подобрать растение под ваш дом и образ жизни.</p></article>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="newsletter">
                        <div><span className="eyebrow" style={{ color: "#dce8ce" }}>Письма с пользой</span><h2>Пусть хорошее растёт</h2><p>Подпишитесь на рассылку: советы по уходу, новинки и приятные предложения.</p></div>
                        <form className="newsletter-form" action="#" method="get">
                            <input className="input" type="email" name="email" placeholder="Ваша электронная почта" aria-label="Электронная почта" required />
                            <button className="btn" type="submit">Подписаться</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}

