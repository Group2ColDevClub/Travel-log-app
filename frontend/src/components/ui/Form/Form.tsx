import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/input';
import styles from './Form.module.css';

interface IFormInput {
  label: string;
  placeholder?: string;
  onChange: Function;
  value?: string | number;
  defaultValue?: string | number;
}

interface IForm {
  inputs: Array<IFormInput>;
  onSubmit: Function;
  onScondaryClick?: Function;
  className?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

export default function Form({ inputs, onSubmit, onScondaryClick, className, primaryButtonText = 'Click', secondaryButtonText }: IForm) {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form className={[styles.form, className].join(' ')}>
      {inputs.map(({ label, placeholder, onChange, value, defaultValue }) => (
        <Input
          key={label}
          label={label}
          name={label}
          className={styles.form_item}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          value={value}
          defaultValue={defaultValue}
        />
      ))}
      <Button type='submit' label={primaryButtonText} className={styles.form_item} onClick={handleSubmit} />
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
