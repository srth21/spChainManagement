import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { black } from 'material-ui/styles/colors';
import QuotePopup from './quotePopup';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,    
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function CatalogueItem(item) {
  const classes = useStyles();

  return (
    <div className={classes.root}>      
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="download.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={4} sm container>
            <Grid item xs container direction="column" spacing={0}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {item.item.Name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {item.item.Description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.item.Vendor}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  <QuotePopup></QuotePopup>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}