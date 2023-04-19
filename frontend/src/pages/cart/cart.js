import React, { useState } from 'react';
import styles from './cart.module.css';
import Title from '../../components/ui/Title/Title';
import Form from '../../components/ui/Form/Form.tsx';
import backgroundImage from '../../assets/cart_backgroundPhoto.png';

export default function CartPage() {
  const [cardNumber, setCardNumber] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (data, e) => {
    e.preventDefault();
  };

  const handleCardNumberChange = (value) => {
    setCardNumber(value);
  };

  const handleExpireDateChange = (value) => {
    setExpireDate(value);
  };

  const handleCvvChange = (value) => {
    setCvv(value);
  };

  const inputsArray = [
    {
      label: 'Card Number',
      name: 'cardNumber',
      onChange: handleCardNumberChange,
      value: cardNumber,
      type: 'text',
      className: `${styles.input_field_card} input-field ${styles.card_number}`,
      class: styles.first_input,
      labelClassName: styles.label_wrapper,
      validationFunc: (value) => {
        const regex = /^[0-9]{16}$/;
        return regex.test(value);
      },
      errorMsg: 'Please enter a valid 16-digit card number',
    },
    {
      label: 'Expiration Date',
      name: 'expireDate',
      onChange: handleExpireDateChange,
      value: expireDate,
      type: 'text',
      className: `${styles.input_field_card} input-field ${styles.expDate}`,
      labelClassName: styles.label_wrapper,
      validationFunc: (value) => {
        const regex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
        return regex.test(value);
      },
      errorMsg: 'Please enter a valid expiration date (MM/YY)',
    },
    {
      label: 'CVV',
      name: 'cvv',
      onChange: handleCvvChange,
      value: cvv,
      type: 'text',
      className: `${styles.input_field_card} input-field `,
      labelClassName: styles.label_wrapper,
      validationFunc: (value) => {
        const regex = /^[0-9]{3,4}$/;
        return regex.test(value);
      },
      errorMsg: 'Please enter a valid CVV (3-4 digits)',
    },
  ];

  return (
    <div className={styles.background} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Title variant='h2' title='Cart' />
      <div className={styles.container}>
        <div className={styles.payment}>
          <Form
            onSubmit={handleSubmit}
            inputs={inputsArray}
            className={styles.form}
            primaryButtonText='Buy it Now !'
            buttonsClassName={styles.button_wrapper}
          />
        </div>
        <div className={styles.restOfThePage} />
      </div>
    </div>
  );
}
