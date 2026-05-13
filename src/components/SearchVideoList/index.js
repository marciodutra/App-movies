import styles from "./SearchVideoList.module.css";
import VideoList from "../../components/VideoList";
import { useState } from "react";

function filterVideos(videos, searchText) {

    const search = searchText.toLowerCase();

    return videos.filter((video) =>
        video.category.toLowerCase().includes(search) ||
        video.title.toLowerCase().includes(search)
    );
}

function SearchVideoList({ videos }) {

    const [searchText, setSearchText] = useState('');

    const foundVideos = filterVideos(videos, searchText);

    return (
        <section className={styles.container}>
            <input
                type="search"
                placeholder="Pesquisar..."
                value={searchText}
                onChange={event => setSearchText(event.target.value)}
            />

            <VideoList 
                videos={foundVideos} 
                emptyHeading={`Não foi encontrado nenhum vídeo sobre "${searchText}"`}
            />
        </section>
    );
}

export default SearchVideoList;