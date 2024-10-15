import "./pagination.css"
import React, { useContext } from 'react'
import { MyContext } from '../../context/context'

const Pagination = () => {
  const { info, setCurrentPage, currentPage } = useContext(MyContext);

  return (

    <div className="pagination-container">
      <button className="buttons"
        onClick={() => setCurrentPage(prev => (prev > 1 ? prev - 1 : 1))}> Prev
      </button>
      <span className='pages'>{currentPage}</span>
      <button className="buttons"
        onClick={() => setCurrentPage(prev => (prev < info.pages ? prev + 1 : info.pages))}> Next
      </button>
    </div>
  );
}

export default Pagination;