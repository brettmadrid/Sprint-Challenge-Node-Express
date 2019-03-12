import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function SingleCard(props) {
  return (
    <div>
      <Card className="card">
        <CardContent>
          <Typography className="title">{props.project.name}</Typography>
          <Button
            color="primary"
            onClick ={() => props.history.push(`/api/projects/${props.project.id}`)}
          >
            Actions
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default SingleCard;
