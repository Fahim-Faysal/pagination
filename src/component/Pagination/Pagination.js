import React from 'react';

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
      const pageNumber = []

      for (let i = 0; i <= Math.ceil(totalPosts / postPerPage); i++) {
            pageNumber.push(i)
      }
      return (
            <nav>
                  <ul style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }} className="pagination">
                        {
                              pageNumber.map(number => (
                                    <li key={number} className="page-item" > <a onClick={() => paginate(number)} className="page-link" href='!#'>{number}
                                    </a>
                                    </li>
                              ))
                        }

                  </ul>
            </nav >
      );
};

export default Pagination;