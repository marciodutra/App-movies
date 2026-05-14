import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import iconFavorite from "./favorite.png";
import iconUnFavorite from "./unfavorite.png";
import { useFavoriteContext } from "../../contexts/Favorites";

function Card({ video }) {

    const { favorite, addFavorite } = useFavoriteContext();

    // extrai o ID do YouTube da URL
    const id = video.url.split("v=")[1];

    const isFavorite = favorite.some((fav) => fav.url === video.url);

    const icone = !isFavorite
        ? iconFavorite
        : iconUnFavorite;

    return (
        <section className={styles.card}>

            <Link to={`/watch/${id}`}>

                <img
                    src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
                    alt="capa"
                    className={styles.capa}
                />

            </Link>

            <figure className={styles.icon}>
                <img
                    src={icone}
                    alt="icone"
                    onClick={() => addFavorite(video)}
                />
            </figure>

        </section>
    );
}

export default Card;