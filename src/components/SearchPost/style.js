import styled from '@emotion/styled';

export const SearchWrapper = styled.div`
  position: relative;
`;
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
  height: 30px;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 5px;
`;

export const SearchInput = styled.input`
  width: 100%;
  font-size: 16px;
  line-height: 10px;
`;

export const SearchResultList = styled.ul`
  position: absolute;
  top: 28px;
  left: 28px;
  width: 480px;
  max-height: 400px;
  list-style: none;
  padding: 0;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  overflow: auto;
  z-index: 3;
`;

export const SearchResultItem = styled.li`
  padding: 10px 20px;

  &:hover {
    background-color: #edf5f5;
    cursor: pointer;
  }
`;
