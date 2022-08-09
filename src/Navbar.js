import { Link } from 'react-router-dom';
import Contact from './Contact';
import MovieInfo from './MovieInfo';

const Navbar = (props) => {

    const json = props.json;
    const jsonLang = props.jsonLang;
    const loggedOn = props.loggedOn;
    const navbarItems = json.navbarItems;
    const movies = json.movies;

    // set state across components
    const setJson = props.setJson;
    const setLoggedOn = props.setLoggedOn;
    const setMovieInfo = props.setMovieInfo;

    // get selected movie info modal
    const getMovie = () => {
        let value = document.getElementById('dataList').value;
        let list = [];
        let copy = [...movies];

        copy.sort((a, b) => (a.title > b.title) ? 1 : -1);

        for (let i = 0; i < copy.length; i++) {
            if (copy[i].title.toLowerCase() === value) {
                list.push(copy[i]);
                break;
            }
        }
        if (list.length === 1) {
            setMovieInfo(list[0]);
        }
        else {
            for (let i = 0; i < copy.length; i++) {
                if (copy[i].title.toLowerCase().includes(value)) {
                    list.push(copy[i]);
                }
            }
        }
        document.getElementById('dataList').value = "";
    }

    // change language
    const changeLanguage = (newLang) => {
        setJson({...jsonLang[newLang]});
    }

    // user log out
    const logout = () => {
        setLoggedOn(false);
    }

    return ( 
    <div>
        <nav className={"navbar navbar-expand-md bg-color-1 sticky-top"}>
            <Link to="" className="navbar-brand">
                <span className="text-color-3 px-3 nav-title fw-900" title="Home">
                    {navbarItems.title}
                </span>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={"collapse navbar-collapse justify-content-end px-3 align-end"} id="main-nav">
                <div className="navbar-nav">
                    <input className="form-control form-control-sm" list="datalistOptions" id="dataList" placeholder={navbarItems.search}/>
                    <datalist id="datalistOptions">
                        {movies.map((movie) => {
                            return <option value={movie.title.toLowerCase()} key={movie.id}/>
                        })}
                    </datalist>
                    <button className="btn btn-search btn-sm mx-2 modalButton" data-bs-toggle="modal" data-bs-target="#movieInfoModal" type="button" onClick={getMovie}>{navbarItems.searchText}</button>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className={"nav-link text-color-3 text-wrap"} title={navbarItems.films}>{navbarItems.films.toUpperCase()}</Link>
                    </li>
                    <li className="nav-item">
                        <div className={"dropdown dropdown-menu-end"}>
                            <button className={"btn btn-lang p-0"} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                <div className="nav-icon">
                                    <i className={"nav-link bi bi-globe text-color-3"} title={navbarItems.lang}><span className="text-collapse ps-2 d-md-none">{navbarItems.lang.toUpperCase()}</span></i>
                                    <i className={"nav-link bi bi-globe2 text-color-3"} title={navbarItems.lang}><span className="text-collapse ps-2 d-md-none">{navbarItems.lang.toUpperCase()}</span></i>
                                </div>
                            </button>
                            <ul className="dropdown-menu lang-menu bg-color-1" aria-labelledby="dropdownMenuButton">
                                <li><div type="button" className={"dropdown-item small text-color-3"} onClick={() => {changeLanguage("en")}}>{navbarItems.language[0]}</div></li>
                                <li><div type="button" className={"dropdown-item small text-color-3"} onClick={() => {changeLanguage("fr")}}>{navbarItems.language[1]}</div></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-icon" type="button" data-bs-toggle="modal" data-bs-target="#contactModal">
                            <i className={"nav-link bi bi-question-circle text-color-3"} title={navbarItems.contact}><span className="text-collapse ps-2 d-md-none">{navbarItems.contact.toUpperCase()}</span></i>
                            <i className={"nav-link bi bi-question-circle-fill text-color-3"} title={navbarItems.contact}><span className="text-collapse ps-2 d-md-none">{navbarItems.contact.toUpperCase()}</span></i>
                        </div>
                    </li>
                    <li className="nav-item">
                        {loggedOn && <div>
                            <Link to="/" className={"nav-icon"} title={navbarItems.account[1]} onClick={logout}>
                                <i className={"nav-link bi bi-person text-color-3"} title={navbarItems.account[1]}><span className="text-collapse ps-2 d-md-none">{navbarItems.account[1].toUpperCase()}</span></i>
                                <i className={"nav-link bi bi-person-fill text-color-3"} title={navbarItems.account[1]}><span className="text-collapse ps-2 d-md-none">{navbarItems.account[1].toUpperCase()}</span></i>
                            </Link>
                        </div>}
                        {!loggedOn && <div>
                            <Link to="/account" className={"nav-link nav-icon text-color-3 text-wrap d-none d-md-block"} title={navbarItems.account[0]}>{navbarItems.account[0].toUpperCase()}</Link>
                            <Link to="/account" className={"nav-link nav-icon text-color-3 text-wrap d-md-none"} title={navbarItems.account}>
                                <i className={"nav-link bi bi-person text-color-3"} title={navbarItems.account[0]}><span className="ps-2 text-collapse">{navbarItems.account[0].toUpperCase()}</span></i>
                                <i className={"nav-link bi bi-person-fill text-color-3"} title={navbarItems.contact}><span className="ps-2 text-collapse">{navbarItems.account[0].toUpperCase()}</span></i>
                            </Link>
                        </div>}        
                    </li>
                </ul>
            </div>
        </nav>
        <Contact contactInfo={json.contactInfo}></Contact>
        <MovieInfo movieInfo={props.movieInfo} movieInfoText={json.movieInfoText} loggedOn={loggedOn}></MovieInfo>
    </div>
    );
}
 
export default Navbar;