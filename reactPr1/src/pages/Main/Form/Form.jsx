import s from './Form.module.css';

export function Form() {
    return (
        <section className="section">
            <div className="container">
                <div className={s.newsletter}>
                    <div><span className="eyebrow" style={{ color: "#dce8ce" }}>Письма с пользой</span><h2>Пусть хорошее растёт</h2><p>Подпишитесь на рассылку: советы по уходу, новинки и приятные предложения.</p></div>
                    <form className={s.newsletterForm} action="#" method="get">
                        <input className={s.input} type="email" name="email" placeholder="Ваша электронная почта" aria-label="Электронная почта" required />
                        <button className={s.btn} type="submit">Подписаться</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

