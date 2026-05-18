import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import iconFavorite from "./favorite.png";
import iconUnFavorite from "./unfavorite.png";
import { useFavoriteContext } from "../../contexts/Favorites";

function Card({ video }) {
    const { favorite, addFavorite } = useFavoriteContext();

    // proteção contra dados inválidos
    if (!video || !video.url) return null;

    // extrai ID do YouTube com segurança
    const getYoutubeId = (url) => {
        try {
            if (!url) return null;

            if (url.includes("youtu.be")) {
                return url.split("/").pop();
            }

            return url.split("v=")[1]?.split("&")[0];
        } catch {
            return null;
        }
    };

    const id = getYoutubeId(video.url);

    if (!id) return null;

    const isFavorite = favorite?.some((fav) => fav?.url === video.url);

    const icone = !isFavorite ? iconFavorite : iconUnFavorite;

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
                    alt="favoritar"
                    onClick={() => addFavorite(video)}
                />
            </figure>
        </section>
    );
}

export default Card;
