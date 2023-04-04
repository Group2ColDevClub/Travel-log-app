/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/input';
import styles from './Form.module.css';

interface IFormInput {
  label: string;
  name: string;
  placeholder?: string;
  onChange: (value: any) => void;
  value?: string | number;
  defaultValue?: string | number;
  validationFunc?: (value: any) => boolean;
  errorMsg?: string;
}

interface IForm {
  inputs: Array<IFormInput>;
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
    inputs.forEach(({ label, validationFunc, errorMsg }) => {
      if (!validationFunc(data[label])) {
        allErrors[label] = errorMsg;
      }
    });
    setErrors({ ...allErrors });
    return !errors.length;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = getData(e);
    if (validate(data)) {
      onSubmit(data, e);
    }
  };

  return (
    <form className={[styles.form, className].join(' ')} onSubmit={handleSubmit}>
      {inputs.map(({ label, name, placeholder, onChange, value, defaultValue, errorMsg }) => (
        <span key={label}>
          <Input
            label={label}
            name={name}
            className={styles.form_item}
            placeholder={placeholder}
            onChange={(event) => onChange(event.target.value)}
            value={value}
            defaultValue={defaultValue}
          />
          {errors?.[label] && <span className={styles.input_error_msg}>{errorMsg}</span>}
        </span>
      ))}
      <Button type='submit' label={primaryButtonText} className={styles.form_item} />
      {secondaryButtonText && (
        <Button
          type='submit'
          label={secondaryButtonText}
          className={styles.form_item}
          variant='tertiary'
          onClick={(e) => onScondaryClick(e)}
        />
      )}
    </form>
  );
}
