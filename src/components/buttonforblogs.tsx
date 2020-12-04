import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby';

const useStyles = makeStyles({
  root: {
    minWidth: 345,
    minHeight: 300
  },
  media: {
    height: 250,
    width: 550
  },
});

export default function Buttonforblog() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to="/blog">
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://image.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-260nw-1029506242.jpg"
            title="Contemplative Reptile"
          />
          <CardContent style={{ backgroundColor: "black" }}>
            <Typography style={{ textAlign: "center", color: "white" }}>
              Click Here to explore the Blogs
        </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}