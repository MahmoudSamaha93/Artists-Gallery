import Artists from './artists';
import { useState, useEffect } from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

const ArtistDetails = ({match}) => {
    
    let [artist, setArtist] = useState({});
    let [albums, setAlbums] = useState([]);
    let URL = `https://my-json-server.typicode.com/MahmoudSamaha93/Artists-Gallery/artists/${match.params.id}`;

    useEffect(() => {
        fetch(URL, { method: 'GET' })
            .then((res)=> {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setArtist(data);
                setAlbums(data.albums);
            })
            .catch((err) => {
                console.log(err);
       }) 
    }, [URL])

    const getAlbums = () => {
        return (albums.map((album) => (
            
            <div className="col-6" key={album.albumId}>
                <div className="card">
                    <img src={`/images/albums/${album.cover}.jpg`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title">{album.title}</h3>
                        <p className="card-text">{album.year}</p>
                    </div>
                </div>
            </div>
            
                ))
        );
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Router>
                        <Route exact path="/artists"  component={Artists}/>
                    </Router>
                    <Link id="backHead" to="/artists">&#128073; GO . TO . ARTISTS &#128072;</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-12 mb-0 mt-5">
                    <img id="covImg" src={`/images/covers/${artist.cover}.jpg`} alt="......" className="img-fluid rounded-circle" />
                </div>
                <div className="col-12 mt-0">
                    <h2 id="artName">{artist.name}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h2 id="secName">Bio</h2>
                </div>
                <div className="col-12">
                    <p id="secPara" className="text-light font-weight-bold font-larger line-space-2">{artist.bio}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h2 id="secName">Albums</h2>
                </div>
                </div>
                <div className="row">
                    {getAlbums()}
                </div>
            
            <div className="row mt-5">
                <div className="col-12">
                    <h2 id="genName">Genre</h2>
                </div>
                <div className="col-12">
                    <p id="secPara" className="text-light font-weight-bold font-larger line-space-2">{artist.genre}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Router>
                        <Route exact path="/artists"  component={Artists}/>
                    </Router>
                    <Link id="backHead" to="/artists">&#128073; GO . TO . ARTISTS &#128072;</Link>
                </div>
            </div>
            <div className="row mt-4 mb-3 text-center">
                    <div className="col-12 text-center">
                        <p id="copyRight">
                            Copyrights<sup>&#169;</sup> Reserved@<a href="https://www.linkedin.com/in/engmahmoudsamaha/">Mahmoud Samaha</a><sup>&#174;</sup>
                        </p>
                    </div>
                </div>
        </div>
    );

}

export default ArtistDetails;
