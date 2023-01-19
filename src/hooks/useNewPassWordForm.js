import { useState } from 'react';
import { putPasswordChange } from '../apis/auth';
import { ERROR_MESSAGE_SIGNIN, USER } from '../utils/constant/auth';

export const useNewPassWordForm = () => {
  const [values, setValues] = useState({
    password: '',
    newPassword: '',
  });

  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await putPasswordChange(values.password);

    if (res.status === 200) {
      swal(USER.CHANGE_PASSWORD_SUCCESS, '', ERROR_MESSAGE_SIGNIN.PASSWORD_SUCCESS);
    }

    setValues({
      password: '',
      newPassword: '',
    });
  };

  return [handleChange, handleSubmit, values, passwordError];
};
