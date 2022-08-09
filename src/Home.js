import Carousel from 'react-bootstrap/Carousel';
import MovieInfo from './MovieInfo';

const Home = (props) => {

    const json = props.json;
    const movies = json.movies.filter((movie) => movie.id <= 3);
    const homeItems = json.homeItems;

    // set state across components
    const setMovieInfo = props.setMovieInfo;

    return ( 
        <div className="container w-100 mt-5" id="home">
            <div className={"container pt-5 pb-3"}>
                <h1 className={"fw-900 text-color-3 text-center"}>{homeItems.title}</h1>
            </div>
            <h6 className={"text-color-3 text-center fst-italic pb-5"}>{homeItems.slogan}</h6>
            <div className={"container"}>
                <div className="container">
                    <h3 className={"text-center text-color-3 fst-italic"}>{homeItems.featured}</h3>
                </div>
                <div className="row justify-content-center">
                    <div className="col-9">
                        <Carousel className="slideshow-item">
                            {movies.map((movie) => (
                                <Carousel.Item key = {movie.id}>
                                    <div type="button" data-bs-toggle="modal" data-bs-target="#movieInfoModal" onClick={() =>{setMovieInfo(movie)}}>
                                        <img className={"d-block w-100"} src={require(`${movie.screencap}`)} alt={movie.title + " (" + movie.year + ")"}/>
                                        <Carousel.Caption className="screencap-caption bg-color-1">
                                            <h3 className="fst-italic">{movie.title + " (" + movie.year + ")"}</h3>
                                        </Carousel.Caption>
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
            <MovieInfo movieInfo={props.movieInfo} movieInfoText={json.movieInfoText} loggedOn={props.loggedOn}></MovieInfo>
        </div>
     );
}
 
export default Home;