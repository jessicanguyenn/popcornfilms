import Carousel from 'react-bootstrap/Carousel';

const Home = ({movies}) => {

    return ( 
        <div className="container w-100" id="home">
            <div className={"container p-5"}>
                <h1 className={"fw-900 text-color-3 text-center"}>POPCORNFILMS</h1>
            </div>
            <div className={"container"}>
                <div className="container">
                    <h3 className={"text-center text-color-3 fst-italic"}>Featured films</h3>
                </div>
                <Carousel className="slideshow-item">
                    {movies.map((movie) => (
                        <Carousel.Item key = {movie.id}>
                            <img className={"d-block screencap"} src={require(`${movie.screencap}`)} alt={movie.title + " (" + movie.year + ")"}/>
                            <Carousel.Caption className="screencap-caption">
                                <h3 className="fst-italic">{movie.title + " (" + movie.year + ")"}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
     );
}
 
export default Home;