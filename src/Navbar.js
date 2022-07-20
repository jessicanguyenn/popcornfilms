import { Link } from 'react-router-dom';

const Navbar = ({navbarItems , lang, account}) => {
    return ( 
        // navbar
        <nav className={"navbar navbar-expand-md bg-color-1 sticky-top"}>
            <Link to={"/" + lang} className="navbar-brand">
                <span className="text-color-3 px-3 nav-title fw-900" title="Home">
                    {navbarItems.title}
                </span>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            { /* nav bar links */ }
            <div className={"collapse navbar-collapse justify-content-end px-3 align-end"} id="main-nav">
                <ul className="navbar-nav">
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
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li><Link className={"dropdown-item small text-color-3"} to={"/en" + account}>{navbarItems.language[0]}</Link></li>
                                    <li><Link className={"dropdown-item small text-color-3"} to={"/fr" + account}>{navbarItems.language[1]}</Link></li>
                                </ul>
                            </div>
                        </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-icon">
                            <i className={"nav-link bi bi-question-circle text-color-3"} href="#contact" title={navbarItems.contact}><span className="text-collapse ps-2 d-md-none">{navbarItems.contact.toUpperCase()}</span></i>
                            <i className={"nav-link bi bi-question-circle-fill text-color-3"} href="#contact" title={navbarItems.contact}><span className="text-collapse ps-2 d-md-none">{navbarItems.contact.toUpperCase()}</span></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <Link to={"/" + lang + "/account"} className={"nav-link nav-icon text-color-3 text-wrap d-md-none"} title={navbarItems.account}>
                            <i className={"nav-link bi bi-person text-color-3"} title={navbarItems.contact}><span className="ps-2 text-collapse">{navbarItems.account.toUpperCase()}</span></i>
                            <i className={"nav-link bi bi-person-fill text-color-3"} title={navbarItems.contact}><span className="ps-2 text-collapse">{navbarItems.account.toUpperCase()}</span></i>
                        </Link>
                        <Link to={"/" + lang + "/account"} className={"nav-link nav-icon text-color-3 text-wrap d-none d-md-block"} title={navbarItems.account}>{navbarItems.account.toUpperCase()}</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;