import Form from 'react-bootstrap/Form';
import MovieInfo from './MovieInfo';
import {useState} from 'react';

const MovieList = ({movies, movie_list, movie_info_text}) => {

    const [movie_info, setmovie_info] = useState(movies[0]);

    const [moviesList, setmoviesList] = useState(movies);

    const sort = () => {
        var select = document.getElementById('sort');
        var value = select.options[select.selectedIndex].value;
        const copy = [...moviesList];
        let list = copy;
        
        if (value === 'Recently Released') {
            list = copy.sort((a, b) => (a.year < b.year) ? 1 : -1);
        }
        else if (value === 'Trending') {
            list = copy.sort((a, b) => (a.id > b.id) ? 1 : -1);
        }
        else if (value === 'Alphabetical') {
            list = copy.sort((a, b) => (a.title > b.title) ? 1 : -1);
        }
        setmoviesList(list);
    }

    const filter = () => {
        var select = document.getElementById('filter');
        var value = select.options[select.selectedIndex].value;
        const copy = [...movies];
        let list = [];

        if (value === 'All') {
            list = copy;
        }

        else {
            copy.map((movie) => {
                if (movie.genre.includes(value)) {
                    list.push(movie);
                }
            });
        }
        setmoviesList(list);
    }

    return ( 
        <div className="container py-5" id="films">
            <h1 className={"text-center text-color-3 fw-bold pt-5 pb-2"}>{movie_list.films}</h1>
            <div className={"container dropdown-container py-3"}>
                <div className="row">
                    <div className="col-lg-1 col-sm-2">
                        <div className="text-start small text-color-3">{movie_list.sort}</div>
                    </div>
                    <div className="col-lg-2 col-sm-4">
                        <Form.Group className="mb-3">
                            <Form.Select className={"dropdown-box form-select-sm"} id="sort" defaultValue={movie_list.sort_type[2]} onChange={sort}>
                                <option className="dropdown-option" value={movie_list.sort_type[0]}>{movie_list.sort_type[0]}</option>
                                <option className="dropdown-option" value={movie_list.sort_type[1]}>{movie_list.sort_type[1]}</option>
                                <option className="dropdown-option" value={movie_list.sort_type[2]}>{movie_list.sort_type[2]}</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <div className="col-lg-2 col-sm-2">
                        <div className="text-end small text-color-3">{movie_list.filter}</div>
                    </div>
                    <div className="col-lg-2 col-sm-4">
                        <Form.Group className="mb-3">
                            <Form.Select className={"dropdown-box form-select-sm"} id="filter" defaultValue={movie_list.filter_type[0]} onChange={filter}>
                                <option className="dropdown-option">{movie_list.filter_type[0]}</option>
                                <option className="dropdown-option">{movie_list.filter_type[1]}</option>
                                <option className="dropdown-option">{movie_list.filter_type[2]}</option>
                                <option className="dropdown-option">{movie_list.filter_type[3]}</option>
                                <option className="dropdown-option">{movie_list.filter_type[4]}</option>
                                <option className="dropdown-option">{movie_list.filter_type[5]}</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                </div>
            </div>
            
            <div className={"container movie-container"}>
                <div className={"row px-5 py-3 my-4 mx-3"}>
                    {moviesList.map((movie) => {
                        return <div className="col-lg-3 col-md-4 col-sm-6" key = {movie.id}>
                            <button type="button" className="btn modalButton" data-bs-toggle="modal" data-bs-target="#movieInfoModal" onClick={() => setmovie_info(movie)}>
                                <div className="poster">
                                    <img className="movie-poster" src={require(`${movie.poster}`)} title={movie.title + " (" + movie.year + ")"} alt={movie.title + " (" + movie.year + ")"}/>
                                    <div className="text-center text-color-3 fst-italic small movie-poster-text">{movie.title + " (" + movie.year + ")"}</div>
                                </div>
                                <p className={"text-center text-color-3 p-2"}>
                                    {movie.title + " (" + movie.year + ")"}
                                </p>
                            </button>
                        </div>
                    })}
                </div>
            </div>
            <MovieInfo movie_info = {movie_info} movie_info_text = {movie_info_text}></MovieInfo>
        </div>
     );
}
 
export default MovieList;