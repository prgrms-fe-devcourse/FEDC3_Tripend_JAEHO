import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { signup } from '@/apis/auth';
import { useFormik } from 'formik';
import { checkZeroOfFront, isValidAge, isValidId, isValidName } from '@/utils/validate/signup';
import { ERROR_MESSAGE_SIGNUP } from '@/utils/constants/auth';
import { USER_PLACEHOLDER } from '@/utils/constants/auth';
import { SignupFormValues } from '@/types/auth/auth.interfaces';
import {
  FieldSet,
  FormSigninText,
  FormSignupText,
  Input,
  InputWrapper,
  SignupButton,
  SignupContainer,
  SignupTitle,
  SignupWrapper,
} from './style';

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
  const formik = useFormik<SignupFormValues>({
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
        .oneOf([Yup.ref('userPassword'), undefined], DIFFERENT_PASSWORD)
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

  return (
    <SignupContainer>
      <SignupWrapper>
        <form onSubmit={formik.handleSubmit}>
          <SignupTitle>회원가입</SignupTitle>
          <FormSignupText>Create your Tripend account</FormSignupText>

          <FieldSet className="form-el">
            <legend>이름</legend>
            <Input
              id="userName"
              name="userName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userName}
              placeholder={USER_PLACEHOLDER.USER_NAME}
            />
          </FieldSet>
          {formik.touched.userName && formik.errors.userName ? (
            <div>{formik.errors.userName}</div>
          ) : null}

          <FieldSet className="form-el">
            <legend>나이</legend>
            <Input
              id="userAge"
              name="userAge"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userAge}
              placeholder={USER_PLACEHOLDER.USER_AGE}
            />
          </FieldSet>
          {formik.touched.userAge && formik.errors.userAge ? (
            <div>{formik.errors.userAge}</div>
          ) : null}

          <FieldSet className="form-el">
            <legend>성별</legend>
            <InputWrapper>
              <Input
                id="userGenderMale"
                name="userGender"
                type="radio"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value="남"
              />
              <label htmlFor="userGenderMale">남</label>

              <Input
                id="userGenderFemale"
                name="userGender"
                type="radio"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value="여"
              />
              <label htmlFor="userGenderFemale">여</label>
            </InputWrapper>
          </FieldSet>
          {formik.touched.userGender && formik.errors.userGender ? (
            <div>{formik.errors.userGender}</div>
          ) : null}

          <FieldSet className="form-el">
            <legend>아이디</legend>
            <Input
              id="userId"
              name="userId"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userId}
              placeholder={USER_PLACEHOLDER.USER_ID}
            />
          </FieldSet>
          {formik.touched.userId && formik.errors.userId ? <div>{formik.errors.userId}</div> : null}

          <FieldSet className="form-el">
            <legend>비밀번호</legend>
            <Input
              id="userPassword"
              name="userPassword"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userPassword}
              placeholder={USER_PLACEHOLDER.USER_PASSWORD}
            />
          </FieldSet>
          {formik.touched.userPassword && formik.errors.userPassword ? (
            <div>{formik.errors.userPassword}</div>
          ) : null}

          <FieldSet className="form-el">
            <legend>비밀번호 확인</legend>
            <Input
              id="userPasswordConfirm"
              name="userPasswordConfirm"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userPasswordConfirm}
              placeholder={USER_PLACEHOLDER.USER_PASSWORD}
            />
          </FieldSet>
          {formik.touched.userPasswordConfirm && formik.errors.userPasswordConfirm ? (
            <div>{formik.errors.userPasswordConfirm}</div>
          ) : null}
          <SignupButton type="submit">가입하기</SignupButton>
          <FormSigninText>
            Are you already a member?{' '}
            <span onClick={() => navigate('/')} style={{ color: 'red', cursor: 'pointer' }}>
              로그인
            </span>
          </FormSigninText>
        </form>
      </SignupWrapper>
    </SignupContainer>
  );
};

export default Signup;
