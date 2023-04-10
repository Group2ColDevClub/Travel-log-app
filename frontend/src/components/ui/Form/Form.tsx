/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/input';
import styles from './Form.module.css';
import { FormInputModel } from '../../../models';

interface IForm {
  inputs: Array<FormInputModel>;
  onSubmit: (data: { [key: string]: any }, e: React.SyntheticEvent) => void;
  className?: string;
  primaryButtonText?: string;
  onScondaryClick?: (e: React.SyntheticEvent) => void;
  secondaryButtonText?: string;
}

export default function Form({ inputs, onSubmit, onScondaryClick, className, primaryButtonText = 'Submit', secondaryButtonText }: IForm) {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const getData = (formEvent: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(formEvent.currentTarget);
    const data: { [key: string]: any } = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    return data;
  };

  const validate = (data: { [key: string]: any }) => {
    const allErrors: { [key: string]: string } = {};
    inputs.forEach(({ name, validationFunc, errorMsg }) => {
      if (!validationFunc(data[name])) {
        allErrors[name] = errorMsg;
      }
    });
    setErrors({ ...allErrors });
    return !errors.length;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const data = getData(e);
    if (validate(data)) {
      onSubmit(data, e);
    }
  };

  return (
    <form className={[styles.form, className].join(' ')} onSubmit={handleSubmit}>
      {inputs.map(({ label, name, placeholder, onChange = () => {}, value, defaultValue, errorMsg, type }) => (
        <span key={label}>
          <Input
            label={label}
            name={name}
            className={styles.form_item}
            placeholder={placeholder}
            onChange={(event) => onChange(event.target.value)}
            value={value}
            defaultValue={defaultValue}
            type={type}
          />
          {errors?.[name] && <span className={styles.input_error_msg}>{errorMsg}</span>}
        </span>
      ))}
      <Button type='submit' label={primaryButtonText} className={styles.form_primary_button} />
      {secondaryButtonText && (
        <Button
          type='button'
          label={secondaryButtonText}
          className={styles.form_item}
          variant='secondary'
          onClick={(e) => onScondaryClick(e)}
        />
      )}
    </form>
  );
}
