import { useState } from "react";
import { categories } from "../Category";
import styles from "./Form.module.css";

function Form() {

    const [url, setUrl ] = useState('')
    const [category, setCategory ] = useState('')
    const [videos, setVideos] = useState([])
    const [errors, setErrors] = useState('')

    function onSave(e) {
        e.preventDefault()
        console.log(url, category)

        const newVideo = {url, category}
        setVideos([...videos, newVideo])
        console.log(videos)
    }

    return(
        <section className={styles.container}>
            <h2>Cadatro de vídeos</h2>
            <form onSubmit={onSave}>
                <div>
                    <label>URL do vídeo</label>
                    <input
                        type="text"
                        placeholder="Coloque a URL do vídeo"
                        required="required"
                        value={url}
                        onChange={ e => setUrl(e.target.value) }
                    />
                </div>
                <div>
                    <label>Categoria</label>
                    <select
                        required="required"
                        value={category}
                        onChange={ e => setCategory(e.target.value) }
                    >
                        <option value="-">Selecione uma categoria</option>
                        {categories.map(item => {
                            return <option value={item}>{item}</option>
                        })}
                    </select>
                </div>
                <div>
                    <button>Cadastrar</button>
                </div>
            </form>
        </section>
    );
}

export default Form;