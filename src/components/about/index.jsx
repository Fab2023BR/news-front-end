import profile from "../../assets/profile.jpg";
import "./about.css";

const About = () => {
  return (
    <section className="about">
      <img src={profile} alt="foto do perfil" className="about__image" />
      <div className="about__author">
        <h2 className="about__author-title">Sobre o autor</h2>
        <p className="about__author-description">
          Esse bloco descreve o autor do projeto. Aqui você deve indicar seu
          nome, o que você faz e quais tecnologias de desenvolvedor você
          conhece.
        </p>
        <p className="about__author-description">
          Você também pode falar sobre sua experiência com o Practicum, o que
          aprendeu lá e como pode ajudar clientes em potencial.
        </p>
      </div>
    </section>
  );
};

export default About;
