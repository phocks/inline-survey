import React from 'react';
import styles from './styles.scss';

export default props => {
  return (
    <div className={styles.root}>
      <div>CHOOSE AN OPTION</div>
    <br />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M7 11v13h2v-5h2v3h2v-7h2v9h2v-13h6l-11-11-11 11z" />
    </svg>
    </div>
  );
}
