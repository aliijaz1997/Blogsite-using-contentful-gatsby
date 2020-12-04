import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

// import Img from "gatsby-image"
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import { Button, CardActions, CardHeader } from "@material-ui/core";
import Layout from "../components/layout";
import { isLoggedIn } from "../utils/auth"
const useStyles = makeStyles({
  root: {
    backgroundImage: 'url(https://i.pinimg.com/originals/f8/6d/46/f86d4605e4013746b8a28b8149d914d8.jpg)'
    , color: "white",
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
  card: {
    display: 'flex',
    marginTop: 10
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
    height: 120
  },
  cardHeader: {
    backgroundColor: "#ffb917"
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    color: "white"
  },
});


const Blog = () => {

  const classes = useStyles();
  const data = useStaticQuery(
    graphql`
    query MyQuery {
      allContentfulBlogPost {
        edges {
          node {
            title
            slug
            authorsName
            shortDescription1
            profilePic {
              fluid {
                src
              }
            }
            publishedDateAndTime
          }
        }
      }
    }
    
    
    
    `
  )
  return (
    <Layout>
      <div style={{
        backgroundImage: "url(https://images.template.net/wp-content/uploads/2015/11/25190740/Ash-Color-Plain-Wallpaper-Download.jpg)"
      }}>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} gutterBottom>
              <h1 style={{ fontSize: "5rem" }} >Here you go for Blogs</h1>
            </Typography>
          </CardContent>
        </Card>
        <div style={{ display: "flex" }} >
          <div>
            {data.allContentfulBlogPost.edges.map((edge: any, key: string) => {
              return (
                <li style={{ listStyle: "none" }} key={key}>
                  <Grid item xs={12} md={6}>
                    <CardActionArea component="a" href="#">
                      <Card style={{ backgroundColor: "black", color: "white" }} className={classes.card}>
                        <div className={classes.cardDetails}>
                          <CardContent>
                            <Typography component="h2" variant="h5">
                              {edge.node.title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                              {edge.node.publishedDateAndTime}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                              {edge.node.shortDescription1}
                            </Typography>
                            <Link to={`/blog/${edge.node.slug}/`}>
                              <Typography variant="subtitle1" color="primary">
                                Continue reading...
                              </Typography>
                            </Link>

                          </CardContent>
                        </div>
                        <Hidden xsDown>
                          <CardMedia className={classes.cardMedia} image={edge.node.profilePic.fluid.src} title="Profile pic of author" />
                        </Hidden>
                      </Card>
                    </CardActionArea>
                  </Grid>
                </li>
              )
            })}
          </div>
          <div>
            <Card style={{
              marginLeft: "-30rem",
              marginRight: "10px",
              marginTop: "1rem",
              backgroundColor: "black"
            }} >
              <CardHeader
                title="Premium access"
                subheader="Most Popular"
                titleTypographyProps={{ align: 'center' }}
                subheaderTypographyProps={{ align: 'center' }}
                className={classes.cardHeader}
              />
              <CardContent>
                <div className={classes.cardPricing}
                >
                  <Typography component="h2" variant="h3" >
                    $20
                    </Typography>
                  <Typography variant="h6" style={{ color: "gray" }} >
                    /mo
                    </Typography>
                </div >
                <Typography variant="h5" style={{ color: "#ffb917", marginTop: '2rem' }} align="center">
                  20 users included
                      <br />
                      10 GB of storage
                      <br />
                      Help center access
                      <br />
                      Priority email support
                      </Typography>
              </CardContent>
              <CardActions>
                <Button style={{ marginTop: "5rem", color: "#ffb917" }} fullWidth color="primary">
                  Buy now
                  </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Blog;