import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support'
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Home from '../Home/home';
import Name from '../Name/Name';
import FeedbackList from '../FeedbackList/feedbackList';

function App() {

  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Stats</h1>
        </header>
      </div>

      <Router>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/name'>
            <Name />
          </Route>

          <Route exact path='/feeling'>
            <Feeling />
          </Route>


          <Route exact path='/understanding'>
            <Understanding />
          </Route>

          <Route exact path='/support'>
            <Support />
          </Route>

          <Route exact path='/comments'>
            <Comments />
          </Route>

          <Route exact path='/review'>
            <Review />
          </Route>

      </Router >
    </>
  );
}

export default App;