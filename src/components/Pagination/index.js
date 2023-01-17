import { PageContainer, PageLi, PageUl } from './style';

const Pagination = ({ totalPosts, postPerPage, paginate }) => {
  // 현재 페이지
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <PageContainer>
      <PageUl className="pagination">
        {pageNumbers.map((number) => (
          <PageLi key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </PageLi>
        ))}
      </PageUl>
    </PageContainer>
  );
};

export default Pagination;
