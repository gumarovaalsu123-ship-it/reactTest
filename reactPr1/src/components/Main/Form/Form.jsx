import s from './Form.module.css';

export function Form() {
    return (
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
    )
}

