export function Product() {
    return (
        <main>

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

            
        </main>
    )
}

