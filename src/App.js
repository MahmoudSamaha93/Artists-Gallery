// import Cover from "./components/cover";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Artists from './components/artists'
import ArtistDetails from './components/artist-details'
import NotFound from './components/error'



const App = ()=> {
  return (
       <Router>
           <div className="container-fluid text-center">
                <div className="row text-center">
                    <div className="col text-center">
                        <Switch>
                            <Route exact path="/artists"  component={Artists}/>
                            <Route path="/artists/:id"  component={ArtistDetails}/>
                            <Route exact path="/"  component={Artists} />
                            <Route path="*"  component={NotFound}/>
                        </Switch>
                    </div>
                </div>
           </div>
       </Router>
    )
}

export default App;
