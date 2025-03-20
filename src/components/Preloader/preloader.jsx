import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__loading"></div>
      <p className="preloader__text">Procurando notícias...</p>
    </div>
  );
}

export default Preloader;
