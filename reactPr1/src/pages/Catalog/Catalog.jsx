import { Catalog as CatalogList } from '../../components/Catalog/Catalog';
import s from './Catalog.module.css';

export function Catalog() {
    return (
        <main>
            <div className={`container ${s.pageIntro}`}>
                <span className="eyebrow">Найдите своего любимца</span>
                <h1>Каталог растений</h1>
                <p>
                    Немного зелени, чтобы сделать каждый день приятнее.
                    Выбирайте растение для своего пространства.
                </p>
            </div>

            <section className={`container ${s.catalog}`}>
                <div className={s.toolbar}>
                    <label className={s.search}>
                        <span className={s.searchIcon}>⌕</span>
                        <input
                            className={s.input}
                            type="search"
                            placeholder="Поиск по товарам"
                            aria-label="Поиск по товарам"
                        />
                    </label>

                    <select className={s.select} aria-label="Категория">
                        <option>Все категории</option>
                        <option>Растения</option>
                        <option>Горшки</option>
                        <option>Аксессуары</option>
                    </select>

                    <select className={s.select} aria-label="Сортировка по цене">
                        <option>Сначала популярные</option>
                        <option>Сначала дешевле</option>
                        <option>Сначала дороже</option>
                    </select>
                </div>

                <div className={s.categories}>
                    <a className={`${s.chip} ${s.active}`} href="#">Все товары</a>
                    <a className={s.chip} href="#">Для начинающих</a>
                    <a className={s.chip} href="#">Теневыносливые</a>
                    <a className={s.chip} href="#">Горшки и кашпо</a>
                </div>

                <CatalogList />
            </section>
        </main>
    );
}