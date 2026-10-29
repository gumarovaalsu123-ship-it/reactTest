import { Card } from './Card/Card'

export function Catalog() {
    return (
        <main>
            <div className="container page-intro"><span className="eyebrow">Найдите своего любимца</span><h1>Каталог растений</h1><p>Немного зелени, чтобы сделать каждый день приятнее. Выбирайте растение для своего пространства.</p></div>
            <section className="container catalog-grid">
                <div className="catalog-toolbar">
                    <label className="search-wrap"><span className="search-icon">⌕</span><input className="input" type="search" placeholder="Поиск по товарам" aria-label="Поиск по товарам" /></label>
                    <select className="select" aria-label="Категория"><option>Все категории</option><option>Растения</option><option>Горшки</option><option>Аксессуары</option></select>
                    <select className="select" aria-label="Сортировка по цене"><option>Сначала популярные</option><option>Сначала дешевле</option><option>Сначала дороже</option></select>
                </div>
                <div className="category-list"><a className="category-chip active" href="#">Все товары</a><a className="category-chip" href="#">Для начинающих</a><a className="category-chip" href="#">Теневыносливые</a><a className="category-chip" href="#">Горшки и кашпо</a></div>
                <div className="product-grid">
                    
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>

                </div>
            </section>


        </main>
    )
}

