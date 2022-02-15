import {
  ButtonGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { AcUnitOutlined } from "@material-ui/icons";
import SendIcon from "@material-ui/icons/Send";
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

  const [title, setTitle] = useState();
  const [details, setDetails] = useState();
  const [category, setCategory] = useState('money');


  const handler = (e) => {
    e.preventDefault();

    if(title && details) {
      console.log(title + ' and ' + details);
    }
  }

  return (
    <Container>
      <Typography
        className={classes.title}
        variant="h1"
        color="primary"
        align="center"
      >
        Create a New Note
      </Typography>

      <Button type="submit">Submit</Button>
      <Button type="submit" variant="outlined" color="secondary">
        Submit
      </Button>

      <ButtonGroup variant="contained" color="primary">
        <Button>one</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <Button
        className={classes.btn}
        type="submit"
        variant="contained"
        color="secondary"
        startIcon={<SendIcon />}
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>
      <br />
      <AcUnitOutlined />
      <AcUnitOutlined color="secondary" fontSize="large" />
      <AcUnitOutlined color="secondary" fontSize="small" />
      <AcUnitOutlined color="action" fontSize="small" />
      <AcUnitOutlined color="error" fontSize="small" />
      <AcUnitOutlined color="disabled" fontSize="small" />
      <AcUnitOutlined />
      <AcUnitOutlined />
      <TextField id="standard-basic" label="Standard"/>
        <TextField id="filled-basic" label="Filled" variant="filled" />

        
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
        //  style={{display:'inline'}}
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
