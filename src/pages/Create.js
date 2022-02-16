import {
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { useHistory } from 'react-router-dom'
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import React, { useState } from "react";

const useStyles = makeStyles({
  btn: {
    fontSize: 20,
    backgroundColor: "violet",
    "&:hover": {
      backgroundColor: "blue",
    },
  },
  title: {
    textDecoration: "underline",
    marginBottom: 20,
  },
  field: {
    marginBottom: 20,
    marginTop: 20,
    display: 'block'
  }
});

export default function Create() {
  const classes = useStyles();
  const history = useHistory()

  const [title, setTitle] = useState();
  const [details, setDetails] = useState();
  const [category, setCategory] = useState('money');


  const handler = (e) => {
    e.preventDefault();

    if(title && details) {
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({ title, details, category })
      }).then(() => history.push('/'))
    }
  }

  return (
    <Container>
        
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handler}>
       
        <TextField 
         onChange={(e) => setTitle(e.target.value)}
         className={classes.field}
         id="outlined-basic"
         label="title" 
         variant="outlined" 
         fullWidth 
         required

        />
        <TextField 
         onChange={(e) => setDetails(e.target.value)}
         className={classes.field}
         id="outlined-basic"
         label="details" 
         variant="outlined" 
         fullWidth 
         required
         multiline
         rows={4}
        />
        <FormControl className={classes.field}>
          <FormLabel>Category</FormLabel>
        <RadioGroup value={category} onChange={e => setCategory(e.target.value)}
         >
          <FormControlLabel value="money" control={<Radio/>}  label='Money' />
          <FormControlLabel value="todos" control={<Radio/>}  label='Todos' />
          <FormControlLabel value="reminders" control={<Radio/>}  label='Reminders' />
          <FormControlLabel value="work" control={<Radio/>}  label='Work' />
        </RadioGroup>
        </FormControl>
        <Button
        className={classes.btn}
        type="submit"
        variant="contained"
        color="secondary"
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>
      </form>
    </Container>
  );
}
