import './Cart.module.css'

export function Cart() {
    return (
        <main>

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

