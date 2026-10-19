export function Catalog() {
    return (
        <main>
            

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

           
        </main>
    )
}

