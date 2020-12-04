import React from 'react';
import Layout from '../components/layout';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        backgroundImage: "url(https://wallup.net/wp-content/uploads/2018/09/25/628138-tile-simple-light_blue-748x421.jpg)"
    },
    title: {
        fontSize: 30,
        fontWeight: 20,
        color: "brown",
    },
    pos: {
        marginBottom: 12,
    },
});

function Contact() {
    const classes = useStyles();
    return (
        <Layout>
            <div  >
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography style={{ fontWeight: "bold" }} className={classes.title} gutterBottom>
                            Contact Us Through Email and Phone.
                    </Typography>
                        <Typography variant="h5" component="h2">
                            Email :
                    </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            aliijaz2010@yahoo.com
                    </Typography>
                        <Typography variant="h5" component="h2">
                            Phone Number :
                    </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            03********3
                    </Typography>
                    </CardContent>
                </Card>
                <span
                    style={{
                        fontSize: "2rem"
                    }}
                >Thanks for your Interest</span>
            </div>
        </Layout>
    )
}
export default Contact;