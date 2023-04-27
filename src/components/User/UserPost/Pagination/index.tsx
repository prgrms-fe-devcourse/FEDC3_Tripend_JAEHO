import { PageContainer, PageLi, PageUl } from './style';

interface PaginationProps {
  totalPosts: number;
  postPerPage: number;
  currentPage: number;
  paginate(number: number): void;
}

const Pagination = ({ totalPosts, postPerPage, currentPage, paginate }: PaginationProps) => {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <PageContainer>
      <PageUl>
        {pageNumbers.map((number) => (
          <PageLi
            key={number}
            onClick={() => paginate(number)}
            isCurrentPage={currentPage === number}
          >
            {number}
          </PageLi>
        ))}
      </PageUl>
    </PageContainer>
  );
};

export default Pagination;
