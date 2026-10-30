import s from './Hero.module.css';
import { Link, NavLink } from 'react-router';

export function Hero() {
    return (
        <section className={s.hero}>
            <div className="container">
                <div className={s.heroGrid}>
                    <div className={s.heroCopy}>
                        <span className="eyebrow">
                            Больше природы рядом
                        </span>

                        <h1>
                            Добавьте в дом немного <em>зелёного.</em>
                        </h1>

                        <p>
                            Комнатные растения и красивые детали, которые делают
                            пространство уютнее. Найдите своего зелёного любимца.
                        </p>

                        <Link className="btn" to="/catalog">
                            Перейти в каталог <span aria-hidden="true">↗</span>
                        </Link>
                    </div>

                    <div className={s.heroImage}>
                        <img
                            src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1100&q=85"
                            alt="Уютный интерьер с комнатными растениями"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

