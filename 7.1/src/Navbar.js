import {Link} from 'react-router-dom';

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">React Fundamentals: {props.title}</a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/react" className="nav-link">React News</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/javascript" className="nav-link">JavaScript News</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;