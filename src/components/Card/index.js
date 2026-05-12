import styles from "./Card.module.css";

function Card({ id }) {
    return(
        <section className={styles.card}>
            <a href={`https://youtu.be/${id}?si=k_k3eRiJJjyl1lQM`}
            rel="noreferrer noopener" target="blank">
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="capa" />
            </a>
        </section>
    );
}

export default Card;