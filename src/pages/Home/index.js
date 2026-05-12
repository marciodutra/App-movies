import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Category, { categories, filterCategory } from "../../components/Category";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useState } from "react";

function Home() {

  const [nome, setNome] = useState("");

  function pegarNome(event) {
    console.log(event.target.value);
    setNome(event.target.value);
  }

  return (
    <>
      <Header />
      <Banner image="favoritos" />

      <Container>

        <input
          type="text"
          placeholder="Nome"
          onChange={pegarNome}
        />

        <h2>{nome}</h2>

        {/*
        {
          categories.map((category, index) =>
            <Category category={category}>
              {filterCategory(index).map((video) => (
                <Card id={video.id} key={video.id} />
              ))}
            </Category>
          )
        }
        */}

      </Container>

      <Footer />
    </>
  );
}

export default Home;