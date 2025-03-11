import { IoClose } from "react-icons/io5";
import "./loginModal.css";

const LoginModal = ({ setShowLoginModal, setShowRegisterModal }) => {
  return (
    <div className="loginModal">
      <IoClose
        className="loginModal__close-button"
        onClick={() => setShowLoginModal(false)}
      />
      <div className="loginModal__wrapper">
        <div className="loginModal__wrapper-form">
          <p className="loginModal__title">Entrar</p>
          <form className="loginModal__form">
            <div className="loginModal__container-form">
              <label className="loginModal__form-label">
                Email
                <input
                  className="loginModal__form-input"
                  placeholder="Insira e-mail"
                />
              </label>
              <label className="loginModal__form-label">
                Senha
                <input
                  className="loginModal__form-input"
                  placeholder="Insira a senha"
                />
              </label>
            </div>
            <button className="loginModal__form-submit" type="submit">
              Entrar
            </button>
            <p className="loginModal__button-redirect">
              ou{" "}
              <button
                type="button"
                onClick={() => {
                  setShowLoginModal(false);
                  setShowRegisterModal(true);
                }}
              >
                Inscreva-se
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
