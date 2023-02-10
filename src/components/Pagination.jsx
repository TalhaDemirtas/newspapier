// Did not complete  ,  Unused
import { useSearchParams } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';

const PaginationWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
    totalPage: 1,
  });

  const page = Number(searchParams.get('page'));
  const totalPage = Number(searchParams.get('totalPage'));

  const onPaginationPrev = (e) => {
    if (page > 1) {
      e.target.disabled = false;
      setSearchParams({ page: page - 1 });
    }

    e.target.disabled = page <= 1;
  };

  const onPaginationChange = (i) => {
    if (i < 1 || i > totalPage) return;

    setSearchParams({ page: i });
  };

  const onPaginationNext = (e) => {
    if (page < totalPage) {
      e.target.disabled = false;
      setSearchParams({ page: page + 1 });
    }

    e.target.disabled = page >= totalPage;
  };

  const items = [];
  for (let i = 1; i <= totalPage; i++) {
    items.push(
      <Pagination.Item
        key={i}
        onClick={onPaginationChange(i)}
        active={i === page}
        disabled={1 > i && i > totalPage}
      >
        {i}
      </Pagination.Item>
    );
  }

  return (
    <Pagination>
      <Pagination.Prev onClick={onPaginationPrev} disabled={page <= 1}>
        Previous
      </Pagination.Prev>
      {items}
      <Pagination.Next onClick={onPaginationNext} disabled={page >= totalPage}>
        Next
      </Pagination.Next>
    </Pagination>
  );
};

// const Pagination = () => {
//   const [searchParams, setSearchParams] = useSearchParams({
//     page: 1,
//     totalPage: 1,
//   });

//   const page = Number(searchParams.get('page'));
//   const totalPage = Number(searchParams.get('totalPage'));

//   const onPaginationNext = (e) => {
//     if (page < totalPage) {
//       e.target.disabled = false;
//       setSearchParams({ page: page + 1 });
//     }

//     e.target.disabled = page >= totalPage;
//   };

//   const onPaginationChange = (i) => {
//     setSearchParams({ page: i });
//   };

//   const onPaginationPrev = (e) => {
//     if (page > 1) {
//       e.target.disabled = false;
//       setSearchParams({ page: page - 1 });
//     }

//     e.target.disabled = page <= 1;
//   };

//   const items = [];
//   for (let i = 1; i <= totalPage; i++) {
//     items.push(
//       <li className="page-item" key={i}>
//         <button className="page-link" onClick={onPaginationChange(i)}>
//           {i}
//         </button>
//       </li>
//     );
//   }

//   return (
//     <nav aria-label="News Pagination">
//       <ul className="pagination justify-content-end">
//         <li className="page-item">
//           <button className="page-link" onClick={onPaginationPrev}>
//             Previous
//           </button>
//         </li>

//         {...items}

//         <li className="page-item">
//           <button className="page-link" onClick={onPaginationNext}>
//             Next
//           </button>
//         </li>
//       </ul>
//     </nav>
//   );
// };

export default PaginationWrapper;
