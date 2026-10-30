import { useEffect, useState } from "react"
import s from "./Categories.module.css";

export function Categories() {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async function load() {
            try{
                const res = await fetch('http://localhost:3000/categories');
                if(!res.ok){
                    throw new Error(`Ошибка: ${res.status} : ${res.statusText}`);
                }
                const data = await res.json();
                setCategories(data);
            }catch(error){
                setError(error.message)
            }
        })()
    }, [])
    if(error){
        return <p>Не удалось загрузить категории: {error}</p>
    }
    if(categories.length===0){
        return <p>Категории не найдены</p>
    }
    return (
        <div className={s.wrap}>
            <button className={`${s.tab} ${s.tabActive}`}>Все</button>
            {
                categories.map((cat) =>
                    <button key={cat.id} className={s.tab}> {cat.title}</button>
                )
            }
        </div>
    )
}