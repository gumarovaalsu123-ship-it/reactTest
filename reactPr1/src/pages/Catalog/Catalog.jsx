import { Catalog as CatalogList } from '../../components/Catalog/Catalog';
import { Categories } from '../../components/Catalog/Categories/Categories';
import s from './Catalog.module.css';
import { useEffect, useState } from 'react';

export function Catalog() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        (async function loadProducts() {
            try{
                const res = await fetch('http://localhost:3000/products');
                if(!res.ok){
                    throw new Error(`Ошибка загрузки: ${res.status}`);
                }
                const data = await res.json();
                setProducts(data);
            }catch(error){
                setError(error.message);
            }
        })()
    }, [])

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(1);
    const [errorCat, setErrorCat] = useState('');
    useEffect(() => {
        (async function loadCategory() {
            try{
                const res = await fetch('http://localhost:3000/categories');
                if(!res.ok){
                    throw new Error(`Ошибка загрузки: ${res.status}`);
                }
                const data = await res.json();
                setCategories(data);
            }catch(error){
                setErrorCat(error.message);
            }
        })()
    }, [])

    const filteredProducts = selectedCategory === 1 ? products : products.filter(products => Number(products.categoryId) === selectedCategory)

    if (error) {
        return <p>Ошибка: {error}</p>;
    }
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
                {/* <div className={s.toolbar}>
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
                </div> */}

                <Categories
                    categories = {categories}
                    selectedCategory={selectedCategory}
                    onSelectedCategory={setSelectedCategory}
                />

                <CatalogList products={filteredProducts} />
            </section>
        </main>
    );
}