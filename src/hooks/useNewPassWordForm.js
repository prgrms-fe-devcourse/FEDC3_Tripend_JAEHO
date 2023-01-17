import { useState } from 'react';
import { putPaswwordChange } from '../apis/auth';
import { ERROR_MESSAGE_SIGNIN, USER } from '../utils/constant/auth';

export const useNewPassWordForm = () => {
  const [values, setValues] = useState({
    password: '',
    newPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await putPaswwordChange(values.password);

    if (res.status === 200) {
      swal(USER.CHANGE_PASSWORD_SUCCESS, '', ERROR_MESSAGE_SIGNIN.PASSWORD_SUCCESS);
    }

    setValues({
      password: '',
      newPassword: '',
    });
  };

  return [handleChange, handleSubmit, values];
};
