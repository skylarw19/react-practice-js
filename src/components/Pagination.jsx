import './Pagination.css'

export default function Pagination({totalPosts, postsPerPage, updatePagination}) {
    const pageNumbers = []

    for (let i=1; i<= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return(
        <div className="pagination">
            {pageNumbers.map((pageNumber) => 
                <p
                    key={pageNumber} 
                    className="page-number"
                    onClick={() => updatePagination(pageNumber)}
                >
                    {pageNumber}
                </p>)
            }
        </div>
        
    )
}