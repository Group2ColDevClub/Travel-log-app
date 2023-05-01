import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './planTrip.module.css';
import Title from '../../components/ui/Title/Title';
import Form from '../../components/ui/Form/Form.tsx';
import Logo from '../../assets/signInPageImg.png';
import { useAuth } from '../../hooks/useAuth.tsx';

export default function PlanTripPage() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (data, e) => {
    e.preventDefault();
    setShowCard(true);
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
      validationFunc: (value) => value.length > 0,
      errorMsg: 'Location is required',
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
      validationFunc: (value) => {
        const startDate = new Date(value);
        const today = new Date();
        return startDate > today && startDate.getFullYear() < 2100;
      },
      errorMsg: 'Start date must be in the future and before end date',
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
      validationFunc: (value) => {
        const endDate = new Date(value);
        const today = new Date();
        return endDate > today && endDate.getFullYear() < 2100;
      },
      errorMsg: 'End date must be in the future and after start date',
    },
    {
      label: 'Number of Travelers',
      name: 'numOfTravelets',
      placeholder: 'Enter number of travelets',
      type: 'text',
      className: styles.form_item,
      labelClassName: styles.label_wrapper,
      validationFunc: (value) => parseInt(value, 10) > 0,
      errorMsg: 'Number of travelers must be greater than 0',
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
          <div className={styles.restOfThePage} />
        </div>
      </div>
    </div>
  );
}
