const MovieInfo = ({movieInfo}) => {
    return ( 
        <div className="modal fade" id="movieInfoModal" tabIndex="-1" aria-labelledby="movieInfoModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content bg-color-2 text-color-1">
                    <div className="modal-header">
                        <h5 className="modal-title fw-bold" id="movieInfoModalLabel">{movieInfo.title + " (" + movieInfo.year + ")"}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        ...
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default MovieInfo;