import Navbar from './Navbar';
import Home from './Home';
import MovieList from './MovieList';
import Footer from './Footer';

function App({json}) {

  const movies = json.movies;

  return (
    <div className="App">
      <Navbar></Navbar>
      <Home movies = {movies.filter((movie) => movie.id <= 3)}></Home>
      <MovieList movies = {movies}></MovieList>
      <Footer></Footer>
    </div>
  );
}

export default App;
