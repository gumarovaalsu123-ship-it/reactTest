import './Card.module.css'

export function Card() {
    return(
        <article className="product-card"><a className="product-image" href="product.html"><span className="product-tag">Хит</span><img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=85" alt="Монстера" /></a><div className="product-info"><h3><a href="product.html">Монстера делициоза</a></h3><div className="product-bottom"><span className="price">1 890 ₽</span><button className="add-small" aria-label="Добавить в корзину">+</button></div></div></article>
    )
    
}