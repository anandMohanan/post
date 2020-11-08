import React, { useState, useEffect } from 'react';
import { Container, Typography, AppBar, Grow, Grid } from '@material-ui/core';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';

import Form from './components/form/form';
import Posts from './components/posts/posts';

function App() {
  const [currentId, SetCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Container maxwidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>
          post
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            className={classes.mainContainer}
            justify='space-between'
            alignItems='stretch'
            spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts SetCurrentId={SetCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} SetCurrentId={SetCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
