import css from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return <p className={css['error-message']}>Something went wrong. Please, try again.</p>;
};

export default ErrorMessage;
