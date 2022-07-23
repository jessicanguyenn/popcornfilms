import { Link } from 'react-router-dom';
import Contact from './Contact';
import MovieInfo from './MovieInfo';

const Navbar = ({navbarItems , lang, account, loggedOn, contactInfo, movies, movie_info_text, movie_info, setmovie_info}) => {

    const getMovie = () => {
        let value = document.getElementById('dataList').value;
        let list = [];

        for (let i = 0; i < movies.length; i++) {
            if (movies[i].title.toLowerCase().includes(value)) {
                list.push(movies[i]);
            }
        }
        if (list.length === 1) {
            setmovie_info(list[0]);
        }
        document.getElementById('dataList').value = "";
    }

    return ( 
    // navbar
    <div>
        <nav className={"navbar navbar-expand-md bg-color-1 sticky-top"}>
            <a href={"https://jessicanguyenn.github.io/popcornfilms/#/" + lang} className="navbar-brand">
                <span className="text-color-3 px-3 nav-title fw-900" title="Home">
                    {navbarItems.title}
                </span>
            </a>
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
                        
                    </li>
                    <li className="nav-item">
                        <Link to={"/" + lang} className={"nav-link text-color-3 text-wrap"} title={navbarItems.films}>{navbarItems.films.toUpperCase()}</Link>
                    </li>
                        <li className="nav-item">
                            <div className={"dropdown dropdown-menu-end"}>
                                <button className={"btn btn-lang p-0"} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                    <a href="#contact" className="nav-icon">
                                        <i className={"nav-link bi bi-globe text-color-3"} title={navbarItems.lang}><span className="text-collapse ps-2 d-md-none">{navbarItems.lang.toUpperCase()}</span></i>
                                        <i className={"nav-link bi bi-globe2 text-color-3"} title={navbarItems.lang}><span className="text-collapse ps-2 d-md-none">{navbarItems.lang.toUpperCase()}</span></i>
                                    </a>
                                </button>
                                <ul className="dropdown-menu lang-menu bg-color-1" aria-labelledby="dropdownMenuButton">
                                    <li><Link className={"dropdown-item small text-color-3"} to={"/en" + account}>{navbarItems.language[0]}</Link></li>
                                    <li><Link className={"dropdown-item small text-color-3"} to={"/fr" + account}>{navbarItems.language[1]}</Link></li>
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
                            <Link to={"/" + lang} className={"nav-icon"} title={navbarItems.account[1]}>
                                <i className={"nav-link bi bi-person text-color-3"} title={navbarItems.account[1]}><span className="text-collapse ps-2 d-md-none">{navbarItems.account[1].toUpperCase()}</span></i>
                                <i className={"nav-link bi bi-person-fill text-color-3"} title={navbarItems.account[1]}><span className="text-collapse ps-2 d-md-none">{navbarItems.account[1].toUpperCase()}</span></i>
                            </Link>
                        </div>}
                        {!loggedOn && <div>
                            <Link to={"/" + lang + "/account"} className={"nav-link nav-icon text-color-3 text-wrap d-md-none"} title={navbarItems.account}>
                                <i className={"nav-link bi bi-person text-color-3"} title={navbarItems.account[0]}><span className="ps-2 text-collapse">{navbarItems.account[0].toUpperCase()}</span></i>
                                <i className={"nav-link bi bi-person-fill text-color-3"} title={navbarItems.contact}><span className="ps-2 text-collapse">{navbarItems.account[0].toUpperCase()}</span></i>
                            </Link>
                            <Link to={"/" + lang + "/account"} className={"nav-link nav-icon text-color-3 text-wrap d-none d-md-block"} title={navbarItems.account[0]}>{navbarItems.account[0].toUpperCase()}</Link>
                        </div>}        
                    </li>
                </ul>
            </div>
        </nav>
        <Contact contactInfo = {contactInfo} lang = {lang}></Contact>
        <MovieInfo movie_info = {movie_info} lang = {lang} movie_info_text = {movie_info_text} loggedOn = {loggedOn}></MovieInfo>
        
    </div>
    );
}
 
export default Navbar;