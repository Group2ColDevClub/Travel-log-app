import { useNavigate } from 'react-router-dom';
import { FormInputModel } from '../../models';
import Form from '../../components/ui/Form/Form.tsx';
import styles from './SignIn.module.css';

export default function SignInPage() {
  const navigate = useNavigate();

  const usernameValidation = (value: string): boolean => value?.length >= 3;
  const passwordValidation = (value: string): boolean => value?.length >= 5;

  const signInInputs: Array<FormInputModel> = [
    {
      label: 'User name',
      name: 'userName',
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
  ];

  const handleSubmit = (data: { [key: string]: any }) => {
    // TODO: handle submit on next issue!
    // eslint-disable-next-line no-console
    console.log(data);
  };

  const goToSignUpPage = () => {
    navigate('/sign_up');
  };

  return (
    <div className={styles.sign_in_page_wrapper}>
      <div className={styles.sign_in_form_wrapper}>
        <Form
          inputs={signInInputs}
          onSubmit={handleSubmit}
          onScondaryClick={goToSignUpPage}
          secondaryButtonText="Don't have an account? Sign up!"
        />
      </div>
    </div>
  );
}
