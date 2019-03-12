import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import SingleActionCard from './SingleActionCard';

function ActionCard(props) {
  const { id } = props.project.id;
  // set up state
  const [actions, setActions] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:9090/api/projects/${id}`)
      .then(response => setActions( response.data.actions ))
      .catch(err => console.log(err));
  });

  return (
    <Card className="card">
      <CardContent>
        <Typography className="title">
          {props.project.name}
          { actions.map(action => (
            <SingleActionCard key={action.id} action={action} />
          ))}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ActionCard;