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

            <div className="container page-intro"><span className="eyebrow">Найдите своего любимца</span><h1>Каталог растений</h1><p>Немного зелени, чтобы сделать каждый день приятнее. Выбирайте растение для своего пространства.</p></div>
            <section className="container catalog-grid">
                <div className="catalog-toolbar">
                    <label className="search-wrap"><span className="search-icon">⌕</span><input className="input" type="search" placeholder="Поиск по товарам" aria-label="Поиск по товарам" /></label>
                    <select className="select" aria-label="Категория"><option>Все категории</option><option>Растения</option><option>Горшки</option><option>Аксессуары</option></select>
                    <select className="select" aria-label="Сортировка по цене"><option>Сначала популярные</option><option>Сначала дешевле</option><option>Сначала дороже</option></select>
                </div>
                <div className="category-list"><a className="category-chip active" href="#">Все товары</a><a className="category-chip" href="#">Для начинающих</a><a className="category-chip" href="#">Теневыносливые</a><a className="category-chip" href="#">Горшки и кашпо</a></div>
                <div className="product-grid">
                    <article className="product-card"><a className="product-image" href="product.html"><span className="product-tag">Хит</span><img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=85" alt="Монстера" /></a><div className="product-info"><h3><a href="product.html">Монстера делициоза</a></h3><div className="product-bottom"><span className="price">1 890 ₽</span><button className="add-small" aria-label="Добавить в корзину">+</button></div></div></article>
                    <article className="product-card"><a className="product-image" href="product.html"><img src="https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=85" alt="Сансевиерия" /></a><div className="product-info"><h3><a href="product.html">Сансевиерия</a></h3><div className="product-bottom"><span className="price">1 290 ₽</span><button className="add-small" aria-label="Добавить в корзину">+</button></div></div></article>
                    <article className="product-card"><a className="product-image" href="product.html"><span className="product-tag">Новинка</span><img src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=85" alt="Фикус" /></a><div className="product-info"><h3><a href="product.html">Фикус эластика</a></h3><div className="product-bottom"><span className="price">2 150 ₽</span><button className="add-small" aria-label="Добавить в корзину">+</button></div></div></article>
                    <article className="product-card"><a className="product-image" href="product.html"><img src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=85" alt="Эпипремнум" /></a><div className="product-info"><h3><a href="product.html">Эпипремнум</a></h3><div className="product-bottom"><span className="price">990 ₽</span><button className="add-small" aria-label="Добавить в корзину">+</button></div></div></article>
                    <article className="product-card"><a className="product-image" href="product.html"><img src="https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=85" alt="Замиокулькас" /></a><div className="product-info"><h3><a href="product.html">Замиокулькас</a></h3><div className="product-bottom"><span className="price">1 650 ₽</span><button className="add-small" aria-label="Добавить в корзину">+</button></div></div></article>
                    <article className="product-card"><a className="product-image" href="product.html"><img src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=85" alt="Кашпо" /></a><div className="product-info"><h3><a href="product.html">Кашпо «Сканди»</a></h3><div className="product-bottom"><span className="price">790 ₽</span><button className="add-small" aria-label="Добавить в корзину">+</button></div></div></article>
                    <article className="product-card"><a className="product-image" href="product.html"><img src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=700&q=85" alt="Растение в интерьере" /></a><div className="product-info"><h3><a href="product.html">Пеперомия</a></h3><div className="product-bottom"><span className="price">1 050 ₽</span><button className="add-small" aria-label="Добавить в корзину">+</button></div></div></article>
                    <article className="product-card"><a className="product-image" href="product.html"><img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=85" alt="Комнатное растение" /></a><div className="product-info"><h3><a href="product.html">Филодендрон</a></h3><div className="product-bottom"><span className="price">1 490 ₽</span><button className="add-small" aria-label="Добавить в корзину">+</button></div></div></article>
                </div>
            </section>

            <div className="container">
                <div className="breadcrumbs"><a href="index.html">Главная</a> / <a href="catalog.html">Каталог</a> / Монстера делициоза</div>
                <section className="product-detail">
                    <div className="detail-image"><img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1100&q=90" alt="Монстера делициоза в горшке" /></div>
                    <div className="detail-copy">
                        <span className="eyebrow">Комнатные растения</span>
                        <h1>Монстера делициоза</h1>
                        <p className="muted">Артикул: GM-001 · В наличии</p>
                        <div className="detail-price">1 890 ₽</div>
                        <p className="description">Эффектное тропическое растение с крупными резными листьями. Монстера станет выразительным акцентом в гостиной, спальне или рабочем пространстве и добавит интерьеру природной свежести.</p>
                        <ul className="detail-points"><li>Высота растения: около 35–45 см</li><li>Рассеянный свет без прямого солнца</li><li>Полив после подсыхания верхнего слоя почвы</li></ul>
                        <div className="detail-actions"><button className="btn" type="button">Добавить в корзину</button><a className="btn btn-outline" href="catalog.html">Вернуться в каталог</a></div>
                        <p className="muted" style={{ fontSize: ".9rem", marginTop: "20px" }}>Растение может немного отличаться от фотографии — каждое по-своему уникально.</p>
                    </div>
                </section>
            </div>

            <div className="container">
                <div className="page-intro"><span className="eyebrow">Ваш выбор</span><h1>Корзина</h1><p>Всё, что нужно для вашего зелёного уголка.</p></div>
                <section className="cart-layout">
                    <div className="cart-list">
                        <article className="cart-item">
                            <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=300&q=85" alt="Монстера делициоза"/>
                                <div><h3>Монстера делициоза</h3><p>Комнатные растения · 1 шт.</p><p className="price" style={{marginTop: "8px"}}>1 890 ₽</p></div>
                                <strong>1 890 ₽</strong>
                        </article>
                        <article className="cart-item">
                            <img src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=300&q=85" alt="Кашпо Сканди"/>
                                <div><h3>Кашпо «Сканди»</h3><p>Горшки и кашпо · 1 шт.</p><p className="price" style={{marginTop: "8px"}}>790 ₽</p></div>
                                <strong>790 ₽</strong>
                        </article>
                        <p className="muted" style={{fontSize:".85rem", marginTop:"18px"}}>Демонстрационный пример корзины для макета.</p>
                    </div>
                    <aside className="cart-summary">
                        <h3>Ваш заказ</h3>
                        <div className="summary-line"><span className="muted">Товары</span><span>2 680 ₽</span></div>
                        <div className="summary-line"><span className="muted">Доставка</span><span>Бесплатно</span></div>
                        <div className="summary-line summary-total"><span>Итого</span><span>2 680 ₽</span></div>
                        <button className="btn" type="button">Оформить заказ</button>
                        <a className="text-link" href="catalog.html" style={{display:"inline-block", marginTop:"18px"}}>Продолжить покупки</a>
                    </aside>
                </section>
            </div>
        </main>
    )
}

