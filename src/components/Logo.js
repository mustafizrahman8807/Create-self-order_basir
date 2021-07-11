import React from 'react';
import {useStyles} from '../styles';

function Logo(props) {
  const styles = useStyles()
  return (
      <img
          src='/images/logo.png'
          alt='Food Order'
          className={styles.largeLogo}
      >

      </img>
  );
}

export default Logo;