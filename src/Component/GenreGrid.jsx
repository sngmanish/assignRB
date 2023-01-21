import React from 'react'
import "../Style/GenreGrid.css"

function HorizontalScroll({ children }) {
    return <div className='grid' total={children.length}>{children}</div>;
  }
const GenreGrid = () => {

  return (
    <>
    <HorizontalScroll>
        <div className='Item'> helloo</div>
        <div className='Item'> helloo</div>
        <div className='Item'> helloo</div>
        <div className='Item'> helloo </div>
        <div className='Item'> helloo </div>
    </HorizontalScroll>
    </>
  )
}

export default GenreGrid
