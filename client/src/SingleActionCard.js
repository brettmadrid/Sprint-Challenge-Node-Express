import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

function SingleActionCard(props) {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = event => {
    setChecked({ checked: !checked });
  };

  return (
    <Card className="card">
      <CardContent>
        <Typography className="title">
          {props.action.description}
        </Typography>
        <Typography component="p">
          {props.action.notes}
        </Typography>
        <Checkbox
          checked={checked}
          onChange={toggleCheckbox()}
          value="checked"
        />
      </CardContent>
    </Card>
  );
}

export default SingleActionCard;