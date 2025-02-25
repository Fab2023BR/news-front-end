import Card from "../card";
import "./news.css";

const News = () => {
  return (
    <section className="news">
      <h2 className="news__title">Procurar resultados</h2>
      <Card />
      <button className="news__read-more">Mostrar mais</button>
    </section>
  );
};

export default News;
