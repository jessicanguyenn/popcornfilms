import Navbar from './Navbar';
import Home from './Home';
import MovieList from './MovieList';
import Footer from './Footer';

function App() {

  const movies = [
    { title: "Before Sunrise", description: "A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together.", length: "101 minutes", director: "Richard Linklater", cast: "Ethan Hawke, Julie Delpy, ...", genre: "Drama, Romance", year: "1995", rating: "R", screencap: "./assets/before-sunrise-screencap.jpg", poster: "./assets/before-sunrise-poster.jpg", id: 1 },
    { title: "Ferris Bueller's Day Off", description: "A high school wise guy is determined to have a day off from school, despite what the Principal thinks of that.", length: "103 minutes", director: "John Hughes", cast: "Matthew Broderick, Alan Ruck, Mia Sara, ...", genre: "Comedy", year: "1986", rating: "PG-13", screencap: "./assets/ferris-bueller-screencap.jpg", poster: "./assets/ferris-bueller-poster.jpg", id: 2 },
    { title: "Dune", description: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.", length: "156 minutes", director: "Denis Villeneuve", cast: "Timothée Chalamet, Rebecca Ferguson, Oscar Isaac, Zendaya, ...", genre: "Action, Adventure, Drama", year: "2021", rating: "PG-13", screencap: "./assets/dune-screencap.jpg", poster: "./assets/dune-poster.jpg", id: 3 },
    { title: "Spider-Man: No Way Home", description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.", length: "148 minutes", director: "Jon Watts", cast: "Tom Holland, Zendaya, Benedict Cumberbatch, Jacob Batalon, ...", genre: "Action, Adventure, Fantasy", year: "2021", rating: "PG-13", screencap: "", poster: "./assets/spider-man-no-way-home-poster.jpg", id: 4 },
    { title: "Top Gun", description: "As students at the United States Navy's elite fighter weapons school compete to be best in the class, one daring young pilot learns a few things from a civilian instructor that are not taught in the classroom.", length: "110 minutes", director: "Tony Scott", cast: "Tom Cruise, Kelly McGillis, Val Kilmer, ...", genre: "Action, Drama", year: "1986", rating: "PG", screencap: "", poster: "./assets/top-gun-poster.jpg", id: 5 },
    { title: "The Social Network", description: "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.", length: "120 minutes", director: "David Fincher", cast: "Jesse Eisenberg, Andrew Garfield, Justin Timberlake, Armie Hammer, ...", genre: "Biography, Drama", year: "2010", rating: "PG-13", screencap: "", poster: "./assets/the-social-network-poster.jpg", id: 6 },
    { title: "Uncharted", description: "Street-smart Nathan Drake is recruited by seasoned treasure hunter Victor \"Sully\" Sullivan to recover a fortune amassed by Ferdinand Magellan, and lost 500 years ago by the House of Moncada.", length: "116 minutes", director: "Ruben Fleischer", cast: "Tom Holland, Mark Wahlberg, Sophia Ali, Tati Gabrielle, Antonio Banderas, ...", genre: "Action, Adventure", year: "2022", rating: "PG-13", screencap: "", poster: "./assets/uncharted-poster.jpg", id: 7 },
    { title: "The Texas Chain Saw Massacre", description: "Five friends head out to rural Texas to visit the grave of a grandfather. On the way they stumble across what appears to be a deserted house, only to discover something sinister within. Something armed with a chainsaw.", length: "83 minutes", director: "Tobe Hooper", cast: "Marilyn Burns, Paul A. Partain, Edwin Neal, ...", genre: "Horror", year: "1974", rating: "R", screencap: "", poster: "./assets/the-texas-chainsaw-massacre-poster.jpg", id: 8 },
    { title: "Us", description: "A family's serene beach vacation turns to chaos when their doppelgängers appear and begin to terrorize them.", length: "116 minutes", director: "Jordan Peele", cast: "Lupita Nyong'o, Winston Duke, Elisabeth Moss, Tim Heidecker, ...", genre: "Horror, Mystery, Thriller", year: "2019", rating: "R", screencap: "", poster: "./assets/us-poster.jpg", id: 9 },
    { title: "Brokeback Mountain", description: "Ennis and Jack are two shepherds who develop a sexual and emotional relationship. Their relationship becomes complicated when both of them get married to their respective girlfriends.", length: "134 minutes", director: "Ang Lee", cast: "Heath Ledger, Jake Gyllenhaal, Linda Cardellini, Anna Faris, ...", genre: "Drama, Romance", year: "2005", rating: "R", screencap: "", poster: "./assets/brokeback-mountain-poster.jpg", id: 10 },
    { title: "The Edge of Seventeen", description: "High-school life gets even more unbearable for Nadine when her best friend, Krista, starts dating her older brother.", length: "104 minutes", director: "Kelly Fremon Craig", cast: "Hailee Steinfeld, Woody Harrelson, Kyra Sedgwick, Haley Lu Richardson, ...", genre: "Comedy, Drama", year: "2016", rating: "R", screencap: "", poster: "./assets/the-edge-of-seventeen-poster.jpg", id: 11 },
    { title: "The Notebook", description: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.", length: "124 minutes", director: "Nick Cassavetes", cast: "Ryan Gosling, Rachel McAdams, James Garner, ...", genre: "Drama, Romance", year: "2004", rating: "PG-13", screencap: "", poster: "./assets/the-notebook-poster.jpg", id: 12 },
    { title: "Mean Girls", description: "Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.", length: "97 minutes", director: "Mark Waters", cast: "Lindsay Lohan, Rachel McAdams, Tim Meadows, Ana Gasteyer, Tina Fey, ...", genre: "Comedy", year: "2004", rating: "PG-13", screencap: "", poster: "./assets/mean-girls-poster.jpg", id: 13 }
  ];

  return (
    <div className="App">
      <Navbar></Navbar>
      <Home one = {movies.filter((movie) => movie.id === 1)} two = {movies.filter((movie) => movie.id === 2)} three = {movies.filter((movie) => movie.id === 3)}></Home>
      <MovieList movies = {movies}></MovieList>
      <Footer></Footer>
    </div>
  );
}

export default App;
