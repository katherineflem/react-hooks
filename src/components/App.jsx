import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import Albums from './Albums'
import AlbumDeets from './AlbumDeets'
//only utilize useState and useEffect hooks to code this app
//have two routes



//Your main function component
const App = () => {
  

    return (
        <>

            <Router>
                <Header />
                <main className="container">
                <Switch>
                    <Route exact path='/' component={Albums}></Route>
                    <Route exact path='/:id/details' component={AlbumDeets}></Route>
                </Switch>
                </main>
            </Router>
        </>

    )

}
export default App 
