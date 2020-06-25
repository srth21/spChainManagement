import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { black } from 'material-ui/styles/colors';
import CatalogueItem from './catalogueItem';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function Row(row) {
    const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
           <CatalogueItem item = {row.row[0]}></CatalogueItem>
           <CatalogueItem item = {row.row[1]}></CatalogueItem>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}