import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
  root1: {
    display: "flex",
    marginTop: "30px",
    backgroundColor: "firebrick",
    height: "400px",
  },
  root2: {
    display: "flex",
    // marginTop: "30px",
    backgroundColor: "#43a88f",
    height: "400px"
  },
  root3: {
    display: "flex",
    // marginTop: "30px",
    backgroundColor: "darkorange",
    height: "400px"
  },
  media : {
    width : "30rem",
    height : "25rem",
    marginLeft : "40rem",
    marginTop : "-13.7rem"
  },
  media1 : {
    width : "30rem",
    height : "25rem",
    marginLeft : "40rem",
    marginTop : "-12.3rem"
  },
  media2 : {
    width : "30rem",
    height : "25rem",
    marginLeft : "40rem",
    marginTop : "-16.8rem"
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

export default function Characteristic() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
    <Card className={classes.root1}>
      <CardContent >
        <Typography style = {{color : "white"}} className={classes.pos} color="textSecondary">
          <h2>Get a free domain</h2>
          <span>
            Give your blog the perfect home. Get a free domain
            <br/>
            or buy a custom domain with just a few clicks.
            <br/>
            This will enable you to feel free while using
            <br/>
            the blogsite. Ways are out here just dont waste
            <br/>
            and grab the oppurtunity
          </span>
        </Typography>
        <CardMedia
          className={classes.media}
          image="https://thumbs.dreamstime.com/b/alphabet-pattern-background-wallpaper-design-alphabet-pattern-background-wallpaper-use-design-layouts-content-177930820.jpg"
          title="Contemplative Reptile"
        />
      </CardContent>
    </Card>
     <Card className={classes.root2}>
     <CardContent >
       <Typography style = {{color : "white"}} className={classes.pos} color="textSecondary">
         <h2>Earn Money</h2>
         <span>
            Get paid for your hard work. Google AdSense
            <br/>
            can automatically display relevant target
            <br/>
            targeted ads on your blog so that you can
            <br/>
            earn money by posting about your passion
            
          </span>
       </Typography>
       <CardMedia
          className={classes.media1}
          image="https://wallpapercave.com/wp/YW7AWV7.jpg"
          title="Contemplative Reptile"
        />
     </CardContent>
   </Card>
    <Card className={classes.root3}>
    <CardContent >
      <Typography className={classes.pos} color="textSecondary">
      <h2>Know your audience</h2>
         <span>
           Find out which posts are hit with 
           <br/>
           Blogger's built in analytics. You'll
           <br/>
           see where your audience is coming from
           <br/>
           and what they are interested in. You 
           <br/>
           can even connect your blog directly to
           <br/>
           Google Analytics for a more detailed
           <br/>
           look.
          </span>
      </Typography>
      <CardMedia
          className={classes.media2}
          image="https://lh3.googleusercontent.com/proxy/QYOQ_5h1bp9iGhQxrBP2twmVlEqRTr7MRFD8Ry757WqOFWxVBm796gWcZEozy5h4PKPWmNNP6QF03EtLd4sts9eTgyTpPMD_Do260IqtSbiVuoEDDXPlqpHbnIOQFZM"
          title="Contemplative Reptile"
        />
    </CardContent>
  </Card>
  </>
  );
}