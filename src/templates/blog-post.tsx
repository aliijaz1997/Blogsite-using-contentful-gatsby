import React, { FC } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Container from '@material-ui/core/Container';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 845,
      backgroundColor: "gainsboro",
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  }),
);

//********************************************************** */
export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }){
    authorsName
    description1{
        description1
    }
    profilePic {
      fluid {
        src
      }
    }
    title
    publishedDateAndTime(formatString: "Do MMMM YYYY")
  }
 }
`
const BlogPost: FC<any> = ({ data }) => {
  const classes = useStyles();

  return (
    <Layout>
      <div style = {{backgroundImage : "url(https://images.template.net/wp-content/uploads/2015/11/25190740/Ash-Color-Plain-Wallpaper-Download.jpg)"}} >
    <Container fixed>
        <Card style = {{alignSelf : "center"}} className={classes.root}>
          <CardHeader
            title={data.contentfulBlogPost.title}
          />
          <div style = {{marginLeft : "15px", marginTop : "-25px"}} >
          <span style = {{
            fontSize : "12px"
          }}>{data.contentfulBlogPost.publishedDateAndTime}</span><br/>
          <span> Written by <span style = {{color : "saddlebrown", fontWeight : "bold"}} > {data.contentfulBlogPost.authorsName} </span></span>
          </div>
          <CardMedia
            className={classes.media}
            image={data.contentfulBlogPost.profilePic.fluid.src}
            title="authors pic"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {data.contentfulBlogPost.description1.description1}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Container>
      </div>
    </Layout>
  )
}

export default BlogPost