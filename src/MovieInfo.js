import { Link } from 'react-router-dom';

const MovieInfo = (props) => {

    const movieInfo = props.movieInfo;
    const movieInfoText = props.movieInfoText;
    const loggedOn = props.loggedOn;

    return ( 
        <div className="modal fade" id="movieInfoModal" tabIndex="-1" aria-labelledby="movieInfoModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content bg-color-2 text-color-1 p-3">
                    <div className="modal-header">
                        <div className="row">
                            <h5 className="modal-title fw-bold pb-2" id="movieInfoModalLabel">{movieInfo.title + " (" + movieInfo.year + ")"}</h5>
                            <div className="col-auto rating fw-bold text-center small">{movieInfo.rating}</div>
                            <div className="small col-auto">{movieInfo.length}</div>
                        </div>                  
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row py-3 justify-content-evenly">
                            <div className="col-lg-4 justify-content-center">
                                <img className="movie-poster" src={require(`${movieInfo.poster}`)} title={movieInfo.title + " (" + movieInfo.year + ")"} alt={movieInfo.title + " (" + movieInfo.year + ")"}/>
                            </div>
                            <div className="col-lg-7">
                                <div className="container fst-italic pb-4">{movieInfo.description}</div>
                                <div className="container pb-2"><span className="fw-bold">{movieInfoText.info[0]}</span>{movieInfo.genre}</div>
                                <div className="container pb-2"><span className="fw-bold">{movieInfoText.info[1]}</span>{movieInfo.director}</div>
                                <div className="container pb-2"><span className="fw-bold">{movieInfoText.info[2]}</span>{movieInfo.cast}</div>
                                <div className="row pt-4 justify-content-center">
                                    {loggedOn &&
                                    <div className="row pt-4 justify-content-center">
                                        <div className="col text-center">
                                            <button type="button" className="btn btn-account text-color-1 fw-bold" data-bs-dismiss="modal">{movieInfoText.info[3]} 
                                            <div className="small">
                                                <div className="small">
                                                    <div className="small">{movieInfoText.info[4]}</div>
                                                </div>
                                            </div></button>
                                        </div>
                                        <div className="col text-center">
                                            <button type="button" className="btn btn-account text-color-1 fw-bold" data-bs-dismiss="modal">{movieInfoText.info[5]}
                                            <div className="small">
                                                <div className="small"><div className="small">
                                                    <div className="small">{movieInfoText.info[6]}</div>
                                                </div>
                                            </div>
                                            </div></button>
                                        </div>
                                    </div>}
                                    {!loggedOn && 
                                    <div className="row pt-2 justify-content-center">
                                        <div className="row">
                                            <div className="small">
                                                <div className="small text-center text-color-1">{movieInfoText.info[7]}</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col text-center">
                                                <button type="button" className="btn btn-account text-color-1 fw-bold" data-bs-dismiss="modal">
                                                    <Link to={"/account"} className="text-color-1 fw-bold">{movieInfoText.info[3]}
                                                    <div className="small">
                                                        <div className="small">
                                                            <div className="small">{movieInfoText.info[4]}</div>
                                                        </div>
                                                    </div></Link>
                                                </button>
                                            </div>
                                            <div className="col text-center">
                                                <button type="button" className="btn btn-account text-color-1 fw-bold" data-bs-dismiss="modal">
                                                    <Link to={"/account"} className="text-color-1 fw-bold">{movieInfoText.info[5]}
                                                    <div className="small">
                                                        <div className="small">
                                                            <div className="small">{movieInfoText.info[6]}</div>
                                                        </div>
                                                    </div></Link>
                                                </button>
                                            </div>
                                        </div>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default MovieInfo;