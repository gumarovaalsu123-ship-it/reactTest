import s from './Product.module.css';
import { Link, useParams } from 'react-router';
import { useEffect, useState } from 'react';

export function Product() {
    const { id } = useParams();

    const [product, setProduct] = useState({});
    const [category, setCategory] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        (async function loadProduct() {
            try {
                const res = await fetch(`http://localhost:3000/products/${id}`);
                if (!res.ok) {
                    throw new Error(`Ошибка загрузки товара: ${res.status}`);
                }
                const data = await res.json();
                setProduct(data);

                const resCat = await fetch(`http://localhost:3000/categories/${data.categoryId}`);
                if (!resCat.ok) {
                    throw new Error(`Ошибка загрузки категории: ${resCat.status}`);
                }
                const dataCat = await resCat.json();
                setCategory(dataCat);
            } catch (error) {
                setError(error.message)
            }
        })()

    }, [id])

    if (error) {
        return <p>Ошибка: {error}</p>;
    }

    if (!product.id) {
        return <p>Загрузка товара...</p>;
    }
    return (
        <main>
            <div className={`container ${s.container}`}>
                <div className={s.breadcrumbs}>
                    <Link to="/">Главная</Link> /{' '}
                    <Link to="/catalog">Каталог</Link> / {product.name}
                </div>

                <section className={s.detail}>
                    <div className={s.image}>
                        <img
                            src={product.image}
                            alt={product.name}
                        />
                    </div>

                    <div className={s.copy}>
                        <span className="eyebrow">{category.name}</span>
                        <h1>{product.name}</h1>
                        <p className="muted">Артикул: {product.id} · В наличии</p>

                        <div className={s.price}>{product.price} ₽</div>

                        <p className={s.description}>
                            {product.description}
                        </p>

                        <ul className={s.points}>
                            {product.features.map((feature, index) => (<li key={index}>{feature}</li>))}
                        </ul>

                        <div className={s.actions}>
                            <button className="btn" type="button">
                                Добавить в корзину
                            </button>
                            <Link className="btn btn-outline" to="/catalog">
                                Вернуться в каталог
                            </Link>
                        </div>

                        <p className={s.note}>
                            Растение может немного отличаться от фотографии —
                            каждое по-своему уникально.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}