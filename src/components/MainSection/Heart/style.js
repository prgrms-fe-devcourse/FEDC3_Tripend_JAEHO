import styled from '@emotion/styled';

const HeartButtonStyleProps = {
  width: '129px',
  height: '50px',
  padding: '5px',
  marginLeft: '15px',
  border: '0',
  fontSize: '16px',
  fontWeight: 'bold',
  borderRadius: '8px',
  cursor: 'pointer',
};

export const MyPost = styled.button`
  ${HeartButtonStyleProps}
  width: 175px;
`;

export const AccompanyButton = styled.button`
  ${HeartButtonStyleProps}
  background-color: var(--primary);
  color: #112211;
`;

export const AccompaniedButton = styled.button`
  ${HeartButtonStyleProps}
  background-color: var(--primary);
  color: var(--gray);
`;
