import { IoClose } from "react-icons/io5";
import "./successModal.css";

function isSuccessModalOpen() {
  const { isisSuccessModalOpenOpen, onPopupOpen, onPopupClose } =
    useContext(CurrentUserContext);
  console.log(isisSuccessModalOpenOpen, "teste");

  const classModalSuccessOpen = isisSuccessModalOpenOpen
    ? "modal-success__open"
    : "";

  return (
    <div className={`modal-success ${classModalSuccessOpen}`}>
      <IoClose
        className="loginModal__close-button"
        onClick={() => setShowLoginModal(false)}
      />
      <div className="modal-success__container">
        <h2 className="modal-success__title">
          Cadastro concluído com sucesso!
        </h2>
        <NavLink
          className="modal-success__text modal-success__link"
          to="/"
          onClick={onPopupOpen}
        >
          Entrar
        </NavLink>
      </div>
    </div>
  );
}

export default isSuccessModalOpen;
