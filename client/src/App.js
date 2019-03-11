import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { Route } from "react-router-dom";

import Cards from './Cards';
import ActionCards from './ActionCards';

import "./App.css";


function App() {
  // set up state
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:9090/api/projects/")
      .then(response => setProjects( response.data ))
      .catch(err => console.log(err));
  });

    return (
      <div className="App">
        <Route
          exact
          path="/api/projects"
          render={props => <Cards {...props} projects={projects} />}
        />
        <Route
        exact
        path="/api/projects/:id"
        render={props => <ActionCards {...props} projects={projects} />}
      />
      </div>
    );
}

export default App;

