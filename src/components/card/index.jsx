import dog from "../../assets/dog.png";
import { CiBookmark } from "react-icons/ci";
import "./card.css";

const Card = () => {
  return (
    <div className="card">
      <img src={dog} alt="Imagem do dog" className="card__image" />
      <button className="card__save-buttom">
        <CiBookmark className="card__save-icon" color="#B6BCBF" />
      </button>
      <div className="card__info">
        <p className="card__news-date">4 de novembro de 2020</p>
        <h3 className="card__news-title">
          Todo mundo precisa de um ''Lugar Especial...
        </h3>
        <p className="card__news-description">
          Desde que li o influente livro de Richard Louv, "O Último Filho na
          Floresta"...
        </p>
        <span className="card__news-sources">treehugger</span>
      </div>
    </div>
  );
};

export default Card;
