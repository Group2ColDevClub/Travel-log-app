import React, { useState } from 'react';
import Input from '../../components/ui/Input/input';
import Label from '../../components/ui/Label/label';
import styles from './planTrip.module.css';
import Button from '../../components/ui/Button/Button';
import Title from '../../components/ui/Title/Title';

export default function PlanTripPage() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const onClick = () => {};

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };
  return (
    <div>
      <div className={styles.background}>
        <div className={styles.bg_image}>
          <Title variant='h2' size='s' title='Plan a Trip'>
            Plan
          </Title>
          <header>
            <div className={styles.searchTrip}>
              <Label name='location'>
                <div className={styles.divSearchTrip}>Location</div>
                <Input size='s' type='text'>
                  location
                </Input>
              </Label>
              <Label name='Start Date'>
                <div className={styles.divSearchTrip}>Start Date</div>
                <Input size='s' type='date' value={startDate} onChange={handleStartDateChange} max={endDate}>
                  dates
                </Input>
              </Label>
              <Label name='Start Date'>
                <div className={styles.divSearchTrip}>End Date</div>
                <Input size='s' type='date' onChange={handleEndDateChange} value={endDate} min={startDate}>
                  dates
                </Input>
              </Label>
              <Label name='Number Of Travelers'>
                <div className={styles.divSearchTrip}>Number of Travelers</div>
                <Input size='s'>number of travelers</Input>
              </Label>
              <Button label='Search' variant='primary' size='s' onClick={onClick} />
            </div>
          </header>
          <div className={styles.restOfThePage}>white background</div>
        </div>
      </div>
    </div>
  );
}
