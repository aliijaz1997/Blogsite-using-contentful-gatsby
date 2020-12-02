import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'gatsby';
import Layout from '../components/layout';
const useStyles = makeStyles({
    root: {
        minWidth: 345,
        minHeight: 300,
        marginTop: 50,
        marginRight: "2rem"
    },
    media: {
        height: 250,
        width: 550
    },
});

function About() {
    const classes = useStyles();
    return (
        <Layout>
            <div
                style={
                    {
                        display: 'flex',
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "2rem"
                    }
                }
            >
                <div style={{ marginLeft: "2rem" }}>
                    <h1 style={{ color: "darkorange" }}>About US</h1>
                    <h2 style={{ color: "darkgrey" }}>Who we are? What we are?</h2>
                    <span style={{ color: "green" }}>
                        We basically are for the service
                  <br />
                  of blogs. Our aim is to provide
                  <br />
                  the user with the best blogger
                  <br />
                  experience.
                  </span>
                </div>
                <div className={classes.root}>
                    <Link to="/blog">
                    <CardMedia
                        className={classes.media}
                        image="https://en.pimg.jp/035/771/922/1/35771922.jpg"
                    />
                    </Link>
                </div>
            </div>
        </Layout>
    )
}
export default About;