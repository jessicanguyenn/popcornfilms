import Navbar from './Navbar';
import Home from './Home';
import MovieList from './MovieList';
import Account from './Account';
import Footer from './Footer';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  const jsonEn = require('./resources/locale-en-ca.json');
  const jsonFr = require('./resources/locale-fr-ca.json');

  return (
    <Router>
      <div className="App w-100 mh-100 bg-color-1">
        <Switch>
          <Route exact path={["/", "/en"]}>
            <Navbar navbarItems = {jsonEn.navbar} lang = "en" account = "" loggedOn = {false} contactInfo = {jsonEn.contact} movies = {jsonEn.movies}/>
            <Home movies = {jsonEn.movies.filter((movie) => movie.id <= 3)} home = {jsonEn.home}></Home>
            <MovieList movies = {jsonEn.movies} movie_list = {jsonEn.movie_list} movie_info_text = {jsonEn.movie_info_text} />
            <Footer footerItems = {jsonEn.footer} lang = "en" contactInfo = {jsonEn.contact}/>
          </Route>
          <Route exact path="/fr">
            <Navbar navbarItems = {jsonFr.navbar} lang = "fr" account = "" loggedOn = {false} contactInfo = {jsonFr.contact} movies = {jsonFr.movies}/>
            <Home movies = {jsonFr.movies.filter((movie) => movie.id <= 3)} home = {jsonFr.home}></Home>
            <MovieList movies = {jsonFr.movies} movie_list = {jsonFr.movie_list} movie_info_text = {jsonFr.movie_info_text} />
            <Footer footerItems = {jsonFr.footer} lang = "fr" contactInfo = {jsonFr.contact}/>
          </Route>
          <Route path="/en/account">
            <Navbar navbarItems = {jsonEn.navbar} lang = "en" account = "/account/" loggedOn = {false} contactInfo = {jsonEn.contact} movies = {jsonEn.movies}/>
            <Account accountItems = {jsonEn.account} lang = "en"/>
            <Footer footerItems = {jsonEn.footer} lang = "en" contactInfo = {jsonEn.contact}/>
          </Route>
          <Route path="/fr/account">
            <Navbar navbarItems = {jsonFr.navbar} lang = "fr" account = "/account/" loggedOn = {false} contactInfo = {jsonFr.contact} movies = {jsonFr.movies}/>
            <Account accountItems = {jsonEn.account} lang = "fr"/>
            <Footer footerItems = {jsonFr.footer} lang = "fr" contactInfo = {jsonFr.contact}/>
          </Route>
          <Route exact path="/en/loggedOn">
            <Navbar navbarItems = {jsonEn.navbar} lang = "en" account = "" loggedOn = {true} contactInfo = {jsonEn.contact} movies = {jsonEn.movies}/>
            <Home movies = {jsonEn.movies.filter((movie) => movie.id <= 3)} home = {jsonEn.home}></Home>
            <MovieList movies = {jsonEn.movies} movie_list = {jsonEn.movie_list} movie_info_text = {jsonEn.movie_info_text} />
            <Footer footerItems = {jsonEn.footer} lang = "en" contactInfo = {jsonEn.contact}/>
          </Route>
          <Route exact path="/fr/loggedOn">
            <Navbar navbarItems = {jsonFr.navbar} lang = "fr" account = "" loggedOn = {true} contactInfo = {jsonFr.contact} movies = {jsonFr.movies}/>
            <Home movies = {jsonFr.movies.filter((movie) => movie.id <= 3)} home = {jsonFr.home}></Home>
            <MovieList movies = {jsonFr.movies} movie_list = {jsonFr.movie_list} movie_info_text = {jsonFr.movie_info_text} />
            <Footer footerItems = {jsonFr.footer} lang = "fr" contactInfo = {jsonFr.contact}/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
