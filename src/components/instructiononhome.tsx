import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby';

const useStyles = makeStyles({
  root: {
    backgroundImage: 'url(https://thumbs.dreamstime.com/b/simple-white-brick-wall-light-gray-shades-seamless-pattern-surface-texture-background-banner-wide-panorama-format-simple-137027626.jpg)'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function InstructionOnHome() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <h1 style = {{color : "#101a23"}}>Welcome !</h1> to the Blog site here you can find out the ideas of well renowned personalities.
        </Typography>
        <Typography variant="h5" component="h2">
          Read. What other's openion?
          <br/>
          So ARE YOU UP FOT IT?
        </Typography>
        <br/>
        <Typography className={classes.pos} color="textSecondary">
          You're most welcome to this blog page. Here you can share whatever you want.
          Get the response of the public. Whatever topic you want do read and share.
        </Typography>
      </CardContent>
      <CardActions>
        <Link to = "/about">
        <Button style = {{color : "darkblue"}} size="small">Click here to learn more</Button>
        </Link>
      </CardActions>
    </Card>
  );
}