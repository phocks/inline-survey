import React from 'react';
import styles from './styles.scss';

export default props => {
  return (
    <div className={styles.root}>
      <h3>{props.heading}</h3>
    </div>
  );
}
