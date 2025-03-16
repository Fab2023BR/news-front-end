import { IoClose } from "react-icons/io5";
import "./registerModal.css";

const RegisterModal = ({ setShowRegisterModal, setShowLoginModal }) => {
  return (
    <div className="registerModal">
      <IoClose
        className="registerModal__close-button"
        onClick={() => setShowRegisterModal(false)}
      />
      <div className="registerModal__wrapper-form">
        <p className="registerModal__title">Inscrever-se</p>
        <form className="registerModal__form">
          <label className="registerModal__form-label">
            Email
            <input
              className="registerModal__form-input"
              placeholder="Insira e-mail"
            />
          </label>
          <label className="registerModal__form-label">
            Senha
            <input
              className="registerModal__form-input"
              placeholder="Insira a senha"
            />
          </label>
          <label className="registerModal__form-label">
            Nome de usuário
            <input
              className="registerModal__form-input"
              placeholder="Insira seu nome de usuário"
            />
          </label>
          <button className="registerModal__form-submit" type="submit">
            Inscrever-se
          </button>
          <p className="registerModal__button-redirect">
            ou{" "}
            <button
              type="button"
              onClick={() => {
                setShowRegisterModal(true);
                setShowLoginModal(false);
              }}
            >
              Entre
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
