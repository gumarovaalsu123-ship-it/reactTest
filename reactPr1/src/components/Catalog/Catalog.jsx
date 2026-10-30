import { Card } from './Card/Card';
import s from './Catalog.module.css';

export function Catalog() {
    return (
        <div className={s.grid}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}