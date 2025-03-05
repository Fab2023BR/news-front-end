import { Switch, Route, withRouter } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute";
import HeaderNewsSaved from "./components/headerNewsSaved";
import Header from "./components/header";
import News from "./components/news";
import About from "./components/about";
import Footer from "./components/footer";
import "./App.css";
import SavedNews from "./components/savedNews";

function App() {
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
          <Header />
          <News />
          <About />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
