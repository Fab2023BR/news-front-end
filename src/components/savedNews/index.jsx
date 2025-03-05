import "./savedNews.css";
import Card from "../card";

const SavedNews = () => {
  return (
    <section className="savedNews">
      <div className="savedNews__wrapper-texts">
        <p className="savedNews__text">Artigos salvos</p>
        <h1 className="savedNews__title">Elise, você tem 5 artigos salvos</h1>
        <p className="savedNews__keywords">
          Por palavras-chave: Natureza, Yellowstone, e 2 outras
        </p>
      </div>
      <div className="savedNews__wrapper-cards">
        <Card pageLocation="saved-news" />
      </div>
    </section>
  );
};

export default SavedNews;
