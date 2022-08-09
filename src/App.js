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
  const jsonLang = {"en": jsonEn, "fr": jsonFr};

  const [json, setJson] = useState(jsonLang["en"]);
  const [loggedOn, setLoggedOn] = useState(false);
  const [movieInfo, setMovieInfo] = useState(json.movies[0]);

  return (
    <Router>
      <div className="App w-100 mh-100 bg-color-1">
        <Navbar json={json} setJson={setJson} jsonLang={jsonLang} loggedOn={loggedOn} setLoggedOn={setLoggedOn} movieInfo={movieInfo} setMovieInfo={setMovieInfo}/>
        <Switch>
          <Route exact path="/">
            <Home json={json} movieInfo={movieInfo} setMovieInfo={setMovieInfo} loggedOn={loggedOn}/>
            <MovieList json = {json} loggedOn = {loggedOn} movieInfo = {movieInfo} setMovieInfo = {setMovieInfo}/>
          </Route>
          <Router path="/account">
            <Account json = {json} setLoggedOn={setLoggedOn}/>
          </Router>
        </Switch>
        <Footer json = {json}/>
      </div>
    </Router>
  );
}

export default App;
