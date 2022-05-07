function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">React Fundamentals: {props.title}</a>
            </div>
        </nav>
    );
}

export default Navbar;