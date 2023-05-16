import React from 'react';
import styles from './TripDescriptionHeader.module.css';
import Button from '../../ui/Button/Button.js';

export default function TripDescriptionHeader({ startDate, endDate, deepLink, price }) {
  const onClick = () => {
    window.open(deepLink, '_blank');
  };

  return (
    <div className={styles.container} id='container'>
      <p className={styles.text}>Price: {price}</p>
      <p className={styles.text}>Start Date: {startDate}</p>
      <p className={styles.text}>End Date: {endDate}</p>
      <Button label='Buy Now' variant='primary' size='l' onClick={onClick} />
    </div>
  );
}
