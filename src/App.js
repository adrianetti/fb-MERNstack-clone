import React, { useEffect, useState } from 'react';
import './App.css';
import Feed from './Components/Feed';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Switch, Route, useHistory, Redirect } from 'react-router-dom';
import Login from './Components/Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { actionTypes } from './reducer';


function App() {
  /* mongodb admin pass: iHucsh5v7eRVtM9a */
  // BEM convention using

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) 
      {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,

        })
      }
      else
      {
        dispatch({
          type: actionTypes.SET_USER,
          user: null,

        })
      }
    })
  }, [])

 
  return (
    <div className="app">
      <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>

        {
          (!user && (
            <Route path="/login">
              <Login />
            </Route>
          ))
        }

        {
          (user && (
            <Route path='/feed'>
              <Header />
              <div className="app__body">
              <Sidebar className="app__bodySidebar" />
              <Feed className="app__bodyFeed"/>
              </div>
              {/* widgets */}
            </Route>
          ))
        }
      </Switch>
      </Router>
    </div>
  );
}

export default App;
