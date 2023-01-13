import { useFormik } from 'formik';
import * as Yup from 'yup';
import { signup } from '../../apis/auth';
import { useNavigate } from 'react-router-dom';
import { ERROR_MESSAGE_SIGNUP } from '../../utils/auth/constant';
import { isValidName, isValidAge, isValidId } from '../../utils/validate/signup';

const {
  NEED_INPUT,
  INCORRECT_NAME,
  INCORRECT_AGE,
  INCORRECT_EMAIL,
  INCORRECT_PASSWORD,
  DIFFERENT_PASSWORD,
} = ERROR_MESSAGE_SIGNUP;

const Signup = () => {
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
      values.userName = values.userName.replace(/ /g, '');
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

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <h1>회원가입</h1>

        <fieldset className="form-el">
          <legend>이름</legend>
          <input
            id="userName"
            name="userName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userName}
          />
        </fieldset>
        {formik.touched.userName && formik.errors.userName ? (
          <div>{formik.errors.userName}</div>
        ) : null}

        <fieldset className="form-el">
          <legend>나이</legend>
          <input
            id="userAge"
            name="userAge"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userAge}
            placeholder="만 나이를 입력해주세요."
          />
        </fieldset>
        {formik.touched.userAge && formik.errors.userAge ? (
          <div>{formik.errors.userAge}</div>
        ) : null}

        <fieldset className="form-el">
          <legend>성별</legend>
          <label>
            <input
              id="userGenderMale"
              name="userGender"
              type="radio"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value="남"
            />
            남
          </label>
          <label>
            <input
              id="userGenderFemale"
              name="userGender"
              type="radio"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value="여"
            />
            여
          </label>
        </fieldset>
        {formik.touched.userGender && formik.errors.userGender ? (
          <div>{formik.errors.userGender}</div>
        ) : null}

        <fieldset className="form-el">
          <legend>아이디</legend>
          <input
            id="userId"
            name="userId"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userId}
            placeholder="tripend@gmail.com"
          />
        </fieldset>
        {formik.touched.userId && formik.errors.userId ? <div>{formik.errors.userId}</div> : null}

        <fieldset className="form-el">
          <legend>비밀번호</legend>
          <input
            id="userPassword"
            name="userPassword"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userPassword}
            placeholder="******"
          />
        </fieldset>
        {formik.touched.userPassword && formik.errors.userPassword ? (
          <div>{formik.errors.userPassword}</div>
        ) : null}

        <fieldset className="form-el">
          <legend>비밀번호 확인</legend>
          <input
            id="userPasswordConfirm"
            name="userPasswordConfirm"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userPasswordConfirm}
            placeholder="******"
          />
        </fieldset>
        {formik.touched.userPasswordConfirm && formik.errors.userPasswordConfirm ? (
          <div>{formik.errors.userPasswordConfirm}</div>
        ) : null}

        <button type="submit">create account</button>
      </form>
      <button onClick={() => navigate('/')}>로그인하러 가기</button>
    </>
  );
};

export default Signup;
