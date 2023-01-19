import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { signup } from '../apis/auth';
import { ERROR_MESSAGE_SIGNUP } from '../utils/constants/auth';
import { checkZeroOfFront, isValidAge, isValidId, isValidName } from '../utils/validate/signup';
const {
  NEED_INPUT,
  INCORRECT_NAME,
  INCORRECT_AGE,
  INCORRECT_EMAIL,
  INCORRECT_PASSWORD,
  DIFFERENT_PASSWORD,
} = ERROR_MESSAGE_SIGNUP;

const useSignupForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      userName: '',
      userAge: '',
      userGender: '',
      userId: '',
      userPassword: '',
      userPasswordConfirm: '',
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .min(2, INCORRECT_NAME)
        .matches(isValidName, INCORRECT_NAME)
        .required(NEED_INPUT),
      userAge: Yup.string().matches(isValidAge, INCORRECT_AGE).required(NEED_INPUT),
      userGender: Yup.string().required(NEED_INPUT),
      userId: Yup.string().matches(isValidId, INCORRECT_EMAIL).required(NEED_INPUT),
      userPassword: Yup.string().min(6, INCORRECT_PASSWORD).required(NEED_INPUT),
      userPasswordConfirm: Yup.string()
        .oneOf([Yup.ref('userPassword'), null], DIFFERENT_PASSWORD)
        .required(NEED_INPUT),
    }),
    onSubmit: async (values) => {
      values.userAge = values.userAge.replace(checkZeroOfFront, '');
      try {
        const response = await signup(values);
        if (response) {
          navigate(`/signup`);
        } else {
          navigate(`/`);
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  return {
    navigate,
    formik,
  };
};

export default useSignupForm;
