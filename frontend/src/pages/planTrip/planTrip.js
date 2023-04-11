import React, { useState } from 'react';
import styles from './planTrip.module.css';
import Title from '../../components/ui/Title/Title';
import Form from '../../components/ui/Form/Form.tsx';

export default function PlanTripPage() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = () => {
    console.log('search submited');
  };
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const inputsArray = [
    {
      label: 'Location',
      name: 'location',
      placeholder: 'Enter location',
      type: 'text',
    },
    {
      label: 'Start Date',
      name: 'startDate',
      onChange: handleStartDateChange,
      value: startDate,
      max: endDate,
      type: 'date',
    },
    {
      label: 'End Date',
      name: 'endDate',
      onChange: handleEndDateChange,
      value: endDate,
      min: startDate,
      type: 'date',
    },
    {
      label: 'Number of Travelers',
      name: 'numOfTravelets',
      placeholder: 'Enter number of travelets',
      type: 'text',
    },
  ];
  return (
    <div>
      <div className={styles.background}>
        <div className={styles.bg_image}>
          <Title variant='h2' title='Plan a Trip' />
          <header>
            <div className={styles.searchTrip}>
              <Form onSubmit={handleSubmit} inputs={inputsArray} className={styles.form} primaryButtonText='Search' />
            </div>
          </header>
          <div className={styles.restOfThePage}>white background</div>
        </div>
      </div>
    </div>
  );
}
