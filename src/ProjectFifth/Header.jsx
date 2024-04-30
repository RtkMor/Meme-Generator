function Header(props) {
    return (
        <nav className={"navbar navbar-expand-md border-bottom position-relative z-1 " + (props.darkMode ? "bg-light border-black" : "bg-dark border-white")} data-bs-theme={props.darkMode ? "light" : "dark"}> 
            <div className="container-fluid">
                <a className="navbar-brand">
                <img src="https://images-na.ssl-images-amazon.com/images/I/61PACBk46hL.png" width="40" height="40" className="mb-1 me-2 ms-2" />
                <p className="d-inline-block mt-3">Meme Generator</p>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">                        

                <ul className="navbar-nav ms-auto mb-2 mb-md-0 me-2">
                    <li className="nav-item">
                        <div className="wrapper nav-link d-flex">
                            <p className="me-2">Light</p>
                            <input type="checkbox" id="check" onClick={props.toggleDarkMode}/>
                            <label htmlFor="check" className="darkSwitch"></label>
                            <p className="ms-2">Dark</p>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">React Course Project-5</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;