import { Link } from 'react-router-dom';

const MovieInfo = ({movie_info, movie_info_text, lang, loggedOn}) => {

    return ( 
        <div className="modal fade" id="movieInfoModal" tabIndex="-1" aria-labelledby="movieInfoModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content bg-color-2 text-color-1 p-3">
                    <div className="modal-header">
                        <div className="row">
                            <h5 className="modal-title fw-bold pb-2" id="movieInfoModalLabel">{movie_info.title + " (" + movie_info.year + ")"}</h5>
                            <div className="col-auto rating fw-bold text-center small">{movie_info.rating}</div>
                            <div className="small col-auto">{movie_info.length}</div>
                        </div>                  
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row py-3 justify-content-evenly">
                            <div className="col-lg-4 justify-content-center">
                                <img className="movie-poster" src={require(`${movie_info.poster}`)} title={movie_info.title + " (" + movie_info.year + ")"} alt={movie_info.title + " (" + movie_info.year + ")"}/>
                            </div>
                            <div className="col-lg-7">
                                <div className="container fst-italic pb-4">{movie_info.description}</div>
                                <div className="container pb-2"><span className="fw-bold">{movie_info_text.info[0]}</span>{movie_info.genre}</div>
                                <div className="container pb-2"><span className="fw-bold">{movie_info_text.info[1]}</span>{movie_info.director}</div>
                                <div className="container pb-2"><span className="fw-bold">{movie_info_text.info[2]}</span>{movie_info.cast}</div>
                                <div className="row pt-4 justify-content-center">
                                    {loggedOn &&
                                    <div className="row pt-4 justify-content-center">
                                        <div className="col text-center">
                                            <button type="button" className="btn btn-account text-color-1 fw-bold" data-bs-dismiss="modal">{movie_info_text.info[3]} 
                                            <div className="small">
                                                <div className="small">
                                                    <div className="small">{movie_info_text.info[4]}</div>
                                                </div>
                                            </div></button>
                                        </div>
                                        <div className="col text-center">
                                            <button type="button" className="btn btn-account text-color-1 fw-bold" data-bs-dismiss="modal">{movie_info_text.info[5]}
                                            <div className="small">
                                                <div className="small"><div className="small">
                                                    <div className="small">{movie_info_text.info[6]}</div>
                                                </div>
                                            </div>
                                            </div></button>
                                        </div>
                                    </div>}
                                    {!loggedOn && 
                                    <div className="row pt-2 justify-content-center">
                                        <div className="row">
                                            <div className="small">
                                                <div className="small text-center text-color-1">{movie_info_text.info[7]}</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col text-center">
                                                <button type="button" className="btn btn-account text-color-1 fw-bold" data-bs-dismiss="modal">
                                                    <Link to={"/" + lang + "/account"} className="text-color-1 fw-bold">{movie_info_text.info[3]}
                                                    <div className="small">
                                                        <div className="small">
                                                            <div className="small">{movie_info_text.info[4]}</div>
                                                        </div>
                                                    </div></Link>
                                                </button>
                                            </div>
                                            <div className="col text-center">
                                                <button type="button" className="btn btn-account text-color-1 fw-bold" data-bs-dismiss="modal">
                                                    <Link to={"/" + lang + "/account"} className="text-color-1 fw-bold">{movie_info_text.info[5]}
                                                    <div className="small">
                                                        <div className="small">
                                                            <div className="small">{movie_info_text.info[6]}</div>
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