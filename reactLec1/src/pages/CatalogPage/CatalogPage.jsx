import { Catalog } from "../../components/Catalog/Catalog";
import s from './CatalogPage.module.css'


export function CatalogPage() {
    return (
        <div className={s.grid}>
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
            <CatalogCard />
        </div>
    )
}