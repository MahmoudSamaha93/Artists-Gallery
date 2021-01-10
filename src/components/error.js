import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import Artists from './artists'

const NotFound = () => {
    return (
        <div className="row mt-5 mb-5">
            <div className="col-12 text-center">
                <h1 id="errH">&#128520; 404 &#128520;</h1>
                <p id="errM">Sorry, Page Not Found</p>
            </div>
            <div className="col-12 mt-5">
                <Router>
                    <Route exact path="/artists" component={Artists} />
                </Router>
                <Link id="backHead" to="/artists">&#128073; GO . TO . ARTISTS &#128072;</Link>
            </div>
        </div>
    );
}

export default NotFound;