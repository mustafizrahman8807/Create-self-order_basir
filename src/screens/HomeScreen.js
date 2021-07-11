import React from 'react';
import {Box, Card, CardActionArea, Typography} from '@material-ui/core';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import {useStyles} from '../styles';
import Logo from '../components/Logo'

function HomeScreen() {
  const styles = useStyles();
  return (
      <Card>
        <CardActionArea>
          <Box className={[styles.root, styles.red]}>
            <Box className={[styles.main, styles.center]}>
              <Typography component='h6' variant='h6'>
                Fast & Easy
              </Typography>
              <Typography component='h1' variant='h1'>
                Order <br/> & pay <br/> here
              </Typography>
              <TouchAppIcon fontSize='large'></TouchAppIcon>
            </Box>
            <Box className={[styles.center, styles.green]}>
              <Logo large></Logo>
              <Typography component='h5' variant='h5'>
                Touch to start
              </Typography>
            </Box>
          </Box>
        </CardActionArea>
      </Card>
  );
}

export default HomeScreen;