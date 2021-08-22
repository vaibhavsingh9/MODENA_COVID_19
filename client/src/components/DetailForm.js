import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    marginDown: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  title: {
    fontFamily:'monospace', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    textDecorationLine: 'underline'
  },
  container:{
  	border:'2px solid rgb(138,35,135)',
  	padding:"20px",
  	 marginTop: theme.spacing(2),
  	 backgroundColor:'#fff'
  }
  
}));

export default function DetailForm({handleInputChange,data}) {
  const classes = useStyles();
  


  return (
    <Container className={classes.container}  maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <Typography className={classes.title} component="h1" variant="h5">
          Fill Details
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                size="small"
                autoFocus
            	value={data.firstName}
                onChange={(e)=>{handleInputChange(e)}}
                error={data.Ename}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                onChange={(e)=>{handleInputChange(e)}}
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                size="small"
                value={data.lastName}
                autoComplete="lname"

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                size="small"
                value={data.email}
                onChange={(e)=>{handleInputChange(e)}}
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="mobile"
                name="mobile"
             	error={data.Emobile}
                variant="outlined"
                required
                fullWidth
                id="mobile"
                label="Mobile No"
               size="small"
               onChange={(e)=>{handleInputChange(e)}}
               value={data.mobile}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                error={data.Ecity}
                variant="outlined"
                required
                value={data.city}
                fullWidth
                id="city"
                label="City"
                name="City"
                autoComplete="city"
                size="small"
                onChange={(e)=>{handleInputChange(e)}}
              />
            </Grid>
            
            
          </Grid>
          
          
        </form>
      </div>
      
    </Container>
  );
}
