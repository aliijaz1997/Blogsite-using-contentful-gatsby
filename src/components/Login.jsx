import React from "react"
import { navigate } from '@reach/router';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { setUser, isLoggedIn, logout } from "../utils/auth"
import firebase from "gatsby-plugin-firebase"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: 500,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Login = () => {
  const classes = useStyles();
  if (isLoggedIn()) {
    navigate(`/blog`)
  }
  function getUiConfig(auth) {
    return {
      signInFlow: 'popup',
      signInOptions: [
        auth.GoogleAuthProvider.PROVIDER_ID,
        auth.EmailAuthProvider.PROVIDER_ID
      ],
      // signInSuccessUrl: '/app/profile',
      callbacks: {
        signInSuccessWithAuthResult: (result) => {
          setUser(result.user);
          navigate('/blog');
        }
      }
    };
  }

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h3" color="textSecondary" >
            Sign Up
        </Typography>
          <Typography variant="h5" component="h2">
            Please Sign-up to access the blogs
        </Typography>
          {firebase && <StyledFirebaseAuth uiConfig={getUiConfig(firebase.auth)} firebaseAuth={firebase.auth()} />}
        </CardContent>
        <a href="/" onClick={event => { event.preventDefault(); logout(firebase).then(() => navigate(`/`)) }}>
          <Button>log out</Button>
        </a>
      </Card>
    </>
  );

}

export default Login