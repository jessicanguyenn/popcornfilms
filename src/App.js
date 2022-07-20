import Navbar from './Navbar';
import Home from './Home';
import MovieList from './MovieList';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  const jsonEn = require('./resources/locale-en-ca.json');
  const jsonFr = require('./resources/locale-fr-ca.json');

  return (
    <Router>
      <div className="App w-100 mh-100 bg-color-1">
        <Switch>
          <Route exact path={["/", "/en"]}>
            <Navbar navbarItems = {jsonEn.navbar} lang = "en" account = ""/>
            <Home movies = {jsonEn.movies.filter((movie) => movie.id <= 3)} home = {jsonEn.home}></Home>
            <MovieList movies = {jsonEn.movies} movie_list = {jsonEn.movie_list} movie_info_text = {jsonEn.movie_info_text} />
          </Route>
          <Route exact path="/fr">
            <Navbar navbarItems = {jsonFr.navbar} lang = "fr" account = ""/>
            <Home movies = {jsonFr.movies.filter((movie) => movie.id <= 3)} home = {jsonFr.home}></Home>
            <MovieList movies = {jsonFr.movies} movie_list = {jsonFr.movie_list} movie_info_text = {jsonFr.movie_info_text} />
          </Route>
          <Route path="/en/account">
            <Navbar navbarItems = {jsonEn.navbar} lang = "en" account = "/account/"/>
          </Route>
          <Route path="/fr/account">
            <Navbar navbarItems = {jsonFr.navbar} lang = "fr" account = "/account/"/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
