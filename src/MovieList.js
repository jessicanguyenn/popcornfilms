import Form from 'react-bootstrap/Form';

const MovieList = ({movies}) => {

    return ( 
        <div className="container py-5" id="movies">
            <h1 className={"text-center text-color-3 fw-bold pt-5 pb-2"}>Films</h1>
            <div className={"container dropdown-container py-3"}>
                <div className="row">
                    <div className="col-1">
                        <div className="text-start small text-color-3">Sort by: </div>
                    </div>
                    <div className="col-2">
                        <Form.Group className="mb-3">
                            <Form.Select className={"dropdown-box form-select-sm"}>
                                <option className="dropdown-option">Alphabetical</option>
                                <option className="dropdown-option">Recently Released</option>
                                <option selected className="dropdown-option">Trending</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div className="col-2">
                        <div className="text-end small text-color-3">Filter by Genre: </div>
                    </div>
                    <div className="col-2">
                        <Form.Group className="mb-3">
                            <Form.Select className={"dropdown-box form-select-sm"}>
                                <option selected className="dropdown-option">All</option>
                                <option className="dropdown-option">Action</option>
                                <option className="dropdown-option">Comedy</option>
                                <option className="dropdown-option">Coming of Age</option>
                                <option className="dropdown-option">Drama</option>
                                <option className="dropdown-option">Romance</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                </div>
            </div>
            
            <div className={"container movie-container"}>
                <div className={"row px-5 py-3 my-4 mx-3"}>
                    {movies.map((movie) => (
                        <div className="col-lg-3 col-md-4 col-sm-6" key = {movie.id}>
                            <img className="movie-poster" src={require(`${movie.poster}`)} title={movie.title + " (" + movie.year + ")"} alt={movie.title + " (" + movie.year + ")"}/>
                            <p className={"text-center text-color-3 p-2"}>{movie.title + " (" + movie.year + ")"}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default MovieList;