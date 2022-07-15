import Carousel from 'react-bootstrap/Carousel';

const Home = ({one, two, three}) => {

    let movieOne = {};
    let movieTwo = {};
    let movieThree = {};

    one.map((movie1) => movieOne = movie1);
    two.map((movie2) => movieTwo = movie2);
    three.map((movie3) => movieThree = movie3);

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
                    <Carousel.Item>
                        <img className={"d-block screencap"} src={require(`${movieOne.screencap}`)} alt={movieOne.title + " (" + movieOne.year + ")"}/>
                        <Carousel.Caption className="screencap-caption">
                            <h3 className="fst-italic">{movieOne.title + " (" + movieOne.year + ")"}</h3>
                            {/*<p>{movieOne.description}</p>*/}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className={"d-block screencap"} src={require(`${movieTwo.screencap}`)} alt={movieTwo.title + " (" + movieTwo.year + ")"}/>
                        <Carousel.Caption className="screencap-caption">
                            <h3 className="fst-italic">{movieTwo.title + " (" + movieTwo.year + ")"}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className={"d-block screencap"} src={require(`${movieThree.screencap}`)} alt={movieThree.title + " (" + movieThree.year + ")"}/>
                        <Carousel.Caption className="screencap-caption">
                            <h3 className="fst-italic">{movieThree.title + " (" + movieThree.year + ")"}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
     );
}
 
export default Home;