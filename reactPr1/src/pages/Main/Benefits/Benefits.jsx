import s from './Benefits.module.css';

export function Benefits() {
    return (
        <section className="section section-soft">
            <div className="container">
                <div className={s.sectionHeading}><div><span className="eyebrow">Почему Green Mood</span><h2>Уют начинается с деталей</h2></div></div>
                <div className={s.benefits}>
                    <article className={s.benefit}><h3>Здоровые растения</h3><p>Тщательно выбираем растения и бережно готовим их к отправке.</p></article>
                    <article className={s.benefit}><h3>Бережная доставка</h3><p>Упаковываем каждый заказ так, чтобы он доехал в отличном состоянии.</p></article>
                    <article className={s.benefit}><h3>Простой уход</h3><p>Подскажем, как подобрать растение под ваш дом и образ жизни.</p></article>
                </div>
            </div>
        </section>
    )
}

