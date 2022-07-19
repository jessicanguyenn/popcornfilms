import Navbar from './Navbar';
import Home from './Home';
import MovieList from './MovieList';
import Footer from './Footer';

function App({json}) {

  const movies = json.movies;

  return (
    <div className="App w-100 mh-100 bg-color-1">
      <Navbar navbarItems = {json.navbar}></Navbar>
      <Home movies = {movies.filter((movie) => movie.id <= 3)} home = {json.home}></Home>
      <MovieList movies = {movies} movie_list = {json.movie_list}></MovieList>
      <Footer></Footer>
    </div>
  );
}

export default App;
