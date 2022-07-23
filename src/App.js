import Navbar from './Navbar';
import Home from './Home';
import MovieList from './MovieList';
import Account from './Account';
import Footer from './Footer';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const jsonEn = require('./resources/locale-en-ca.json');
  const jsonFr = require('./resources/locale-fr-ca.json');

  const [movie_info, setmovie_info] = useState(jsonFr.movies[0]);

  return (
    <Router>
      <div className="App w-100 mh-100 bg-color-1">
        <Switch>
          <Route exact path={["/", "/en"]}>
            <Navbar navbarItems = {jsonEn.navbar} lang = "en" account = "" loggedOn = {false} contactInfo = {jsonEn.contact} movies = {jsonEn.movies} movie_info_text = {jsonEn.movie_info_text} movie_info = {movie_info} setmovie_info = {setmovie_info}/>
            <Home movies = {jsonEn.movies.filter((movie) => movie.id <= 3)} home = {jsonEn.home}></Home>
            <MovieList movies = {jsonEn.movies} movie_list = {jsonEn.movie_list} movie_info_text = {jsonEn.movie_info_text} lang = "en" loggedOn = {false} movie_info = {movie_info} setmovie_info = {setmovie_info}/>
            <Footer footerItems = {jsonEn.footer} lang = "en" contactInfo = {jsonEn.contact}/>
          </Route>
          <Route exact path="/fr">
            <Navbar navbarItems = {jsonFr.navbar} lang = "fr" account = "" loggedOn = {false} contactInfo = {jsonFr.contact} movies = {jsonFr.movies} movie_info_text = {jsonFr.movie_info_text} movie_info = {movie_info} setmovie_info = {setmovie_info}/>
            <Home movies = {jsonFr.movies.filter((movie) => movie.id <= 3)} home = {jsonFr.home}></Home>
            <MovieList movies = {jsonFr.movies} movie_list = {jsonFr.movie_list} movie_info_text = {jsonFr.movie_info_text} lang = "fr" loggedOn = {false} setmovie_info = {setmovie_info} movie_info = {movie_info}/>
            <Footer footerItems = {jsonFr.footer} lang = "fr" contactInfo = {jsonFr.contact}/>
          </Route>
          <Route path="/en/account">
            <Navbar navbarItems = {jsonEn.navbar} lang = "en" account = "/account/" loggedOn = {false} contactInfo = {jsonEn.contact} movies = {jsonEn.movies} movie_info_text = {jsonEn.movie_info_text} setmovie_info = {setmovie_info} movie_info = {movie_info}/>
            <Account accountItems = {jsonEn.account} lang = "en"/>
            <Footer footerItems = {jsonEn.footer} lang = "en" contactInfo = {jsonEn.contact}/>
          </Route>
          <Route path="/fr/account">
            <Navbar navbarItems = {jsonFr.navbar} lang = "fr" account = "/account/" loggedOn = {false} contactInfo = {jsonFr.contact} movies = {jsonFr.movies} movie_info_text = {jsonFr.movie_info_text} setmovie_info = {setmovie_info} movie_info = {movie_info}/>
            <Account accountItems = {jsonFr.account} lang = "fr"/>
            <Footer footerItems = {jsonFr.footer} lang = "fr" contactInfo = {jsonFr.contact}/>
          </Route>
          <Route exact path="/en/loggedOn">
            <Navbar navbarItems = {jsonEn.navbar} lang = "en" account = "" loggedOn = {true} contactInfo = {jsonEn.contact} movies = {jsonEn.movies} movie_info_text = {jsonEn.movie_info_text} setmovie_info = {setmovie_info} movie_info = {movie_info}/>
            <Home movies = {jsonEn.movies.filter((movie) => movie.id <= 3)} home = {jsonEn.home}></Home>
            <MovieList movies = {jsonEn.movies} movie_list = {jsonEn.movie_list} movie_info_text = {jsonEn.movie_info_text} lang = "en" loggedOn = {true} setmovie_info = {setmovie_info} movie_info = {movie_info}/>
            <Footer footerItems = {jsonEn.footer} lang = "en" contactInfo = {jsonEn.contact}/>
          </Route>
          <Route exact path="/fr/loggedOn">
            <Navbar navbarItems = {jsonFr.navbar} lang = "fr" account = "" loggedOn = {true} contactInfo = {jsonFr.contact} movies = {jsonFr.movies} movie_info_text = {jsonFr.movie_info_text} setmovie_info = {setmovie_info} movie_info = {movie_info}/>
            <Home movies = {jsonFr.movies.filter((movie) => movie.id <= 3)} home = {jsonFr.home}></Home>
            <MovieList movies = {jsonFr.movies} movie_list = {jsonFr.movie_list} movie_info_text = {jsonFr.movie_info_text} lang = "fr" loggedOn = {true} setmovie_info = {setmovie_info} movie_info = {movie_info}/>
            <Footer footerItems = {jsonFr.footer} lang = "fr" contactInfo = {jsonFr.contact}/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
