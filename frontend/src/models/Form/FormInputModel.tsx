/* eslint-disable no-unused-vars */

export default interface FormInputModel {
  label: string;
  name: string;
  placeholder?: string;
  onChange?: (value: any) => void;
  value?: string | number;
  defaultValue?: string | number;
  validationFunc?: (value: any) => boolean;
  errorMsg?: string;
  type?: 'number' | 'date' | 'password' | 'text' | 'email' | 'select';
  className?: string;
  labelClassName?: string;
}
