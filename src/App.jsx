import { useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute";
import HeaderNewsSaved from "./components/headerNewsSaved";
import Header from "./components/header";
import News from "./components/news";
import About from "./components/about";
import Footer from "./components/footer";
import "./App.css";
import SavedNews from "./components/savedNews";
import LoginModal from "./components/loginModal";
import RegisterModal from "./components/registerModal";

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <div className="page">
      <Switch>
        <ProtectedRoute
          exact
          path="/saved-news"
          isLoggedIn
          component={() => (
            <>
              <HeaderNewsSaved />
              <SavedNews />
              <Footer />
            </>
          )}
        />
        <Route exact path="/">
          <Header setShowLoginModal={setShowLoginModal} />
          <News />
          <About />
          <Footer />
        </Route>
      </Switch>

      {showLoginModal ? (
        <LoginModal
          setShowLoginModal={setShowLoginModal}
          setShowRegisterModal={setShowRegisterModal}
        />
      ) : null}

      {showRegisterModal ? (
        <RegisterModal
          setShowRegisterModal={setShowRegisterModal}
          setShowLoginModal={setShowLoginModal}
        />
      ) : null}
    </div>
  );
}

export default withRouter(App);
