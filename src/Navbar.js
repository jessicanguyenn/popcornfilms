const Navbar = () => {
    return ( 
        // navbar
        <nav className={"navbar navbar-expand-md bg-color-1 sticky-top"}>
            <div className="container-xxl">
                <a href="#" className="navbar-brand ">
                    <span className="text-color-3 px-3 nav-title fw-900" title="Home">
                        POPCORNFILMS
                    </span>
                </a>
                { /*toggle button for mobile nav */ }
                {/*<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>*/}
            </div>
            { /* nav bar links */ }
            <div className={"container collapse navbar-collapse justify-content-end px-3 align-end"} id="main-nav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#movies" className={"nav-link text-color-3 text-wrap"} title="Movies">MOVIES</a>
                    </li>
                    <li className="nav-item">
                        <a href="#account" className={"nav-link text-color-3 text-wrap"} title="Login / Register">LOGIN / REGISTER</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-help-icon">
                            <i className={"nav-link bi bi-question-circle text-color-3"} href="#contact" title="Need help?"></i>
                            <i className={"nav-link bi bi-question-circle-fill text-color-3"} href="#contact" title="Need help?"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;