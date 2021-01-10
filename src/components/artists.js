import { Component } from 'react';
import Artist from './artist';
import Cover from './cover';

class Artists extends Component {
    constructor() {
        super();
        this.state = {
            artists: []
        }

        this.URL = 'http://localhost:3300/artists';
    }

    renderArtits({ artists }) {
        if (artists && artists.length > 0) {
            return (artists.map((artist) => (
                <Artist key={artist.id} artistInfo = {artist}/>
            )));
        }
        return (
            <div>
                <h1 className="display-1 alert alert-heading">No Artists Found!!</h1>
            </div>
        )
    }

    render = () => {
        return (
            <>
                <Cover />
                <div className="row text center mt-3 mb-3">
                    <div className="col-12">
                        <h2 id="brotitle" className="dispaly-2 text-center">&#128071; Browse Artists &#128071;</h2>
                    </div>
                </div>
                <div className="row mb-2">
                    {this.renderArtits(this.state)}
                </div>
                <div className="row mt-4 mb-2 text-center">
                    <div className="col-12 text-center">
                        <p id="copyRight">
                            Copyrights<sup>&#169;</sup> Reserved@<a href="https://www.linkedin.com/in/engmahmoudsamaha/">Mahmoud Samaha</a><sup>&#174;</sup>
                        </p>
                    </div>
                </div>
            </>
        );
    }

    componentDidMount() {

        fetch(this.URL, { method: 'GET' })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                this.setState({ artists: data });
            return
            })
            .catch((err) => {
                console.log(err);
        })
        
    }
}

export default Artists;