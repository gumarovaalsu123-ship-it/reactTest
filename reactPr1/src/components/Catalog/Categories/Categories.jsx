import s from './Categories.module.css';

export function Categories() {
    return (
        <div className={s.categories}>
            <button className={`${s.chip} ${s.active}`} type="button">
                Все товары
            </button>

            <button className={s.chip} type="button">
                Для начинающих
            </button>

            <button className={s.chip} type="button">
                Теневыносливые
            </button>

            <button className={s.chip} type="button">
                Горшки и кашпо
            </button>
        </div>
    );
}