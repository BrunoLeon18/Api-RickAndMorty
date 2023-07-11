import "./styles/Pagination.css"

const Pagination = ({ setPage, page, quantyPage }) => {

    const handleNext = () => {
        setPage(page + 1)
    }
    const handlePrev = () => {
        setPage(page - 1)
    }

  return (
   
    <div className="pagination">
        { page > 1 && 
        <button 
        className="btn_pagination" 
        onClick={handlePrev}>
            <i className='bx bxs-chevrons-left'></i>
        </button>}
        {quantyPage !== 0 
        ? 
        <p className="text_pagination">{page} de {quantyPage}</p> 
        : 
        '' }
        {quantyPage > page && 
        <button
        className="btn_pagination" 
        onClick={handleNext}>
            <i className='bx bxs-chevrons-right' ></i>
        </button>}
    </div> 
    )  
}

export default Pagination