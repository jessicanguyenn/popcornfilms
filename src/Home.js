import Carousel from 'react-bootstrap/Carousel';

const Home = ({movies, home}) => {

    return ( 
        <div className="container w-100 mt-5" id="home">
            <div className={"container pt-5 pb-3"}>
                <h1 className={"fw-900 text-color-3 text-center"}>{home.title}</h1>
            </div>
            <h6 className={"text-color-3 text-center fst-italic pb-5"}>{home.slogan}</h6>
            <div className={"container"}>
                <div className="container">
                    <h3 className={"text-center text-color-3 fst-italic"}>{home.featured}</h3>
                </div>
                <div className="row justify-content-center">
                    <div className="col-9">
                        <Carousel className="slideshow-item">
                            {movies.map((movie) => (
                                <Carousel.Item key = {movie.id}>
                                    <img className={"d-block w-100"} src={require(`${movie.screencap}`)} alt={movie.title + " (" + movie.year + ")"}/>
                                    <Carousel.Caption className="screencap-caption bg-color-1">
                                        <h3 className="fst-italic">{movie.title + " (" + movie.year + ")"}</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;