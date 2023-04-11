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
  const handleStartDateChange = (value) => {
    setStartDate(value);
  };

  const handleEndDateChange = (value) => {
    setEndDate(value);
  };

  const inputsArray = [
    {
      label: 'Location',
      name: 'location',
      placeholder: 'Enter location',
      type: 'text',
      className: styles.form_item,
      labelClassName: styles.label_wrapper,
    },
    {
      label: 'Start Date',
      name: 'startDate',
      onChange: handleStartDateChange,
      value: startDate,
      max: endDate,
      type: 'date',
      className: styles.form_item,
      labelClassName: styles.label_wrapper,
    },
    {
      label: 'End Date',
      name: 'endDate',
      onChange: handleEndDateChange,
      value: endDate,
      min: startDate,
      type: 'date',
      className: styles.form_item,
      labelClassName: styles.label_wrapper,
    },
    {
      label: 'Number of Travelers',
      name: 'numOfTravelets',
      placeholder: 'Enter number of travelets',
      type: 'text',
      className: styles.form_item,
      labelClassName: styles.label_wrapper,
    },
  ];
  return (
    <div>
      <div className={styles.background}>
        <div className={styles.bg_image}>
          <Title variant='h2' title='Plan a Trip' />
          <header>
            <div className={styles.searchTrip}>
              <Form
                onSubmit={handleSubmit}
                inputs={inputsArray}
                className={styles.form}
                primaryButtonText='Search'
                buttonsClassName={styles.button_wrapper}
              />
            </div>
          </header>
          <div className={styles.restOfThePage}>white background</div>
        </div>
      </div>
    </div>
  );
}
