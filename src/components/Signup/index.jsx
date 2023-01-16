import useSignupForm from '../../hooks/useSignupForm';
import { USER_PLACEHOLDER } from '../../utils/constant/auth';
import {
  FieldSet,
  FormSigninText,
  InputWrapper,
  SignupButton,
  SignupContainer,
  SignupTitle,
} from './style';

const Signup = () => {
  const { navigate, formik } = useSignupForm();

  return (
    <SignupContainer>
      <form onSubmit={formik.handleSubmit}>
        <SignupTitle>회원가입</SignupTitle>

        <FieldSet className="form-el">
          <legend>이름</legend>
          <input
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
          <input
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
            <input
              id="userGenderMale"
              name="userGender"
              type="radio"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value="남"
            />
            <label htmlFor="userGenderMale">남</label>

            <input
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
          <input
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
          <input
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
          <input
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
          이미 회원이신가요?
          <span onClick={() => navigate('/')} style={{ color: 'red', cursor: 'pointer' }}>
            로그인
          </span>
        </FormSigninText>
      </form>
    </SignupContainer>
  );
};

export default Signup;
