export const USER = {
  ID_PASSWORD: '아이디와 비밀번호를 확인해주세요',
  LOGIN_FAILED: '로그인 실패',
  PASSWORD_FAILED: '비밀번호가 틀렸어요 ㅠㅠ',
  CHANGE_PASSWORD_SUCCESS: '비밀번호 변경이 완료되었습니다',
  DELETE_POSTER: '게시글을 삭제하시겠습니까?',
  DELETE: '삭제하면 되돌릴수 없습니다.',
};

export const ERROR_MESSAGE_AUTH = {
  LOGIN_ERROR: 'error',
  PASSWORD_SUCCESS: 'success',
  DELETE_POSTER_WARNING: 'warning',
};

export const URL = {
  LOGIN: '/login',
  AUTH_USER: '/auth-user',
  PASSWORD_UPADTE: '/settings/update-password',
  MYPAGE_DELETE: '/posts/delete',
  MYPAGE_UPDATE: '/posts/update',
  MYPAGE_GET_POSTER: '/posts',
};

export const TOKEN = 'Token';
export const ID = 'id';
export const USERIMAGE = 'userImage';

export const ERROR_MESSAGE_SIGNUP = {
  NEED_INPUT: '* 입력이 필요합니다.',
  INCORRECT_NAME: '올바른 이름을 입력해주세요.',
  INCORRECT_AGE: '* 올바른 나이를 입력해주세요.',
  INCORRECT_EMAIL: '* 올바른 이메일을 입력해주세요.',
  DUPLICATE_EMAIL: '* 이미 존재하는 아이디입니다.',
  INCORRECT_PASSWORD: '* 올바른 비밀번호(6자 이상)를 입력해주세요.',
  DIFFERENT_PASSWORD: '* 동일한 비밀번호를 입력해주세요.',
};
