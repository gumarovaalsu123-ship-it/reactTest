import s from './PageNotFound.module.css'

export function PageNotFound(){
    return(
        <div className="container">
            <h1 className={s.title}>404</h1>
            <h2 className={s.subtitle}>Страница не найдена</h2>
        </div>
    )
}