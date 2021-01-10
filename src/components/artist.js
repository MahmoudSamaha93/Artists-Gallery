import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import ArtistDetails from './artist-details';
const Artist = ({ artistInfo }) => {
    // let URL = 'http://localhost:3300/artists';
    if (artistInfo)
        return (
            <div className="col-12 col-md-3">
                <div className="card">
                    <img src={`/images/covers/${artistInfo.cover}.jpg`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{artistInfo.name}</h5>
                        <p className="card-text">{artistInfo.bio}</p>
                        <Router>
                            <Route exact path="/artists/:id"  component={ArtistDetails}/>
                        </Router>
                        <Link to={`/artists/${artistInfo.id}`} className="btn btn-primary">Go to Details</Link>
                    </div>
                </div>
            </div>
        );
    return (
        <div className="col-12 alert alert-danger text-center">
            <h2 id="errHead">No Artist Data Available!!</h2>
        </div>
    );
}

export default Artist;