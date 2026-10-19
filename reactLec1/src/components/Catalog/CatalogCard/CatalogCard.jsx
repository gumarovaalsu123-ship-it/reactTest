import s from './CatalogCard.module.css';
export function CatalogCard() {
    return (
        <article className={s.card}>
            <div className={s.imageWrap}>
                <img
                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReEFzSZYEpBTCJxipv4WnYH5EOR9onyGdztDpo1oPbfIazJxt9dGCEHieq&s=10'}
                    alt="Товар 2"
                    className={s.image}
                    loading="lazy"
                />
            </div>
            <div className={s.body}>
                <h3 className={s.name}>Название товара</h3>
                <p className={s.desc}>Короткое описание в одну строку</p>
                <div className={s.footer}>
                    <span className={s.price}>2 490 ₽</span>
                    <button className={s.buy} type="button">
                        Купить
                    </button>
                </div>
            </div>
        </article>
    )
}
