import s from './Categories.module.css';

export function Categories(props) {
    return (
        <div className={s.categories}>
            {props.categories.map(category => (
                <button
                    key={category.id}
                    className={`${s.chip} ${props.selectedCategory===Number(category.id) ? s.active : ''}`}
                    type="button"
                    onClick={() => props.onSelectedCategory(Number(category.id))}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
}