import styles from "./Header.module.css";
import {Link} from "react-router-dom";

function Header() {
    return(
        <header className={styles.header}>
            <Link to="/">
                <span>DutraFlix</span>
            </Link>
            <nav> 
                <Link to="/">Home</Link>                
                <Link to="/search">Pesquisar</Link>
                <Link to="/favorites">Favoritos</Link>
                <Link to="/cadastre">Cadastrar vídeos</Link>
            </nav>
        </header>
    )
}

export default Header;