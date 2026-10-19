import s from './Banner.module.css';

export function Banner() {
    return (
        <section
            className={s.hero}
            style={{
                backgroundImage: `url(https://img.magnific.com/free-photo/vivid-blurred-colorful-background_58702-2655.jpg?semt=ais_hybrid&w=740&q=80)`,
                background: "center cover/ no-repeat",
            }}
        >
            <div className={s.content}>
                <h1 className={s.title}>Создавайте быстрее вместе с нами</h1>
                <p className={s.subtitle}>
                    Всё, что нужно вашей команде для продуктивной работы — в одном месте.
                </p>
                <a href="#contact" className={s.cta}>
                    Начать бесплатно
                </a>
            </div>
        </section>
    )
}