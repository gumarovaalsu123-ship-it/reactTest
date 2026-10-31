import { Catalog as CatalogList } from '../../components/Catalog/Catalog';
import { Categories } from '../../components/Catalog/Categories/Categories';
import s from './Catalog.module.css';
import { useEffect, useState } from 'react';

export function Catalog() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        (async function loadProducts() {
            try {
                const res = await fetch('http://localhost:3000/products');
                if (!res.ok) {
                    throw new Error(`Ошибка загрузки: ${res.status}`);
                }
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                setError(error.message);
            }
        })()
    }, [])

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [errorCat, setErrorCat] = useState('');
    useEffect(() => {
        (async function loadCategory() {
            try {
                const res = await fetch('http://localhost:3000/categories');
                if (!res.ok) {
                    throw new Error(`Ошибка загрузки: ${res.status}`);
                }
                const data = await res.json();
                setCategories(data);
            } catch (error) {
                setErrorCat(error.message);
            }
        })()
    }, [])

    const filteredProducts = products
        .filter(product => selectedCategory === 1 || Number(product.categoryId) === selectedCategory)
        .filter(product => product.name.trim().toLowerCase().includes(searchQuery.toLowerCase().trim()))
        .sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.price - b.price;
            }
            if (sortOrder === 'desc') {
                return b.price - a.price;
            }
            return 0;
            
        })

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
                <div className={s.toolbar}>
                    <label className={s.search}>
                        <span className={s.searchIcon}>⌕</span>
                        <input
                            className={s.input}
                            type="search"
                            placeholder="Поиск по товарам"
                            aria-label="Поиск по товарам"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </label>

                    <select className={s.select} aria-label="Сортировка по цене" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                        <option>Сначала популярные</option>
                        <option value='asc'>Сначала дешевле</option>
                        <option value='desc'>Сначала дороже</option>
                    </select>
                </div>

                <Categories
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelectedCategory={setSelectedCategory}
                />

                <CatalogList products={filteredProducts} />
            </section>
        </main>
    );
}