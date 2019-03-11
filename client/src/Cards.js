import React from "react";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import SingleCard from "./SingleCard";

function Cards(props) {
  return (
    <div>
    <Paper className="paper" elevation={1}>
      <Typography variant="h5" component="h3">
        Projects
      </Typography>
      <Typography component="p">Stuff that needs to get done...</Typography>
    </Paper>
    <div className="cards-container">
      {props.projects.map(project => (
        <>
          <SingleCard key={project.id} project={project} />
        </>
      ))}
    </div>
    </div>
  );
}

export default Cards;