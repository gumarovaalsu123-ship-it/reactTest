import { Card } from './Card/Card';
import s from './Catalog.module.css';

export function Catalog(props) {
    return (
        <div className={s.grid}>
            {props.products.map(product => (
                <Card
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    category={product.category}
                />
            ))}
        </div>
    );
}