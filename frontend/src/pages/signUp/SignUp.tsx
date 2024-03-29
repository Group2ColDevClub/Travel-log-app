import { useNavigate } from 'react-router-dom';
import { FormInputModel } from '../../models/index.js';
import styles from './SignUp.module.css';
import Form from '../../components/ui/Form/Form.tsx';
import * as Requests from '../../service/Requests';

export default function SignUp() {
  const navigate = useNavigate();

  const firstNameValidation = (value: string): boolean => value?.length >= 3;
  const lastNameValidation = (value: string): boolean => value?.length >= 3;
  const usernameValidation = (value: string): boolean => value?.length >= 3;
  const passwordValidation = (value: string): boolean => value?.length >= 5;
  const emailValidation = (value: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };
  const signInInputs: Array<FormInputModel> = [
    {
      label: 'First name',
      name: 'firstName',
      placeholder: 'First name',
      errorMsg: 'First name is not valid',
      validationFunc: firstNameValidation,
    },
    {
      label: 'Last name',
      name: 'lastName',
      placeholder: 'Last name',
      errorMsg: 'Last name is not valid',
      validationFunc: lastNameValidation,
    },
    {
      label: 'User name',
      name: 'username',
      placeholder: 'User name',
      errorMsg: 'User name is not valid',
      validationFunc: usernameValidation,
    },
    {
      label: 'Password',
      name: 'password',
      placeholder: 'Password',
      errorMsg: 'Password is not valid',
      validationFunc: passwordValidation,
      type: 'password',
    },
    {
      label: 'Email',
      name: 'email',
      placeholder: 'email',
      errorMsg: 'Email is not valid',
      validationFunc: emailValidation,
      type: 'email',
    },
  ];

  const handleSubmit = async (data: { [key: string]: any }) => {
    const signedUp = await Requests.signup(data);
    if (signedUp) {
      navigate('/plan_a_trip');
    }
  };

  const goToSignUpPage = () => {
    navigate('/sign_in');
  };

  return (
    <div className={styles.sign_up_page_wrapper}>
      <div className={styles.sign_up_form_wrapper}>
        <Form
          inputs={signInInputs}
          onSubmit={handleSubmit}
          onScondaryClick={goToSignUpPage}
          secondaryButtonText='Already have an account? Sign in!'
        />
      </div>
    </div>
  );
}
