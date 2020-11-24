import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      // color: theme.palette.text.secondary,
      backgroundColor : "black",
      color : "darkgrey"
    },
  }),
);

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
              Copy right created by Hifz ur Rehman Ali
          </Paper>
        </Grid>
    </div>
  );
}