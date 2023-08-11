import Pagination from '@mui/material/Pagination';

interface PaginationComponentProps {
  count: number;
  page: number;
  itemsPerPage: number;
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({ count, page, itemsPerPage, onChange }) => {
  const pageCount = Math.ceil(count / itemsPerPage);

  return (
    <Pagination count={pageCount} page={page} onChange={onChange} />
  );
};

export default PaginationComponent;