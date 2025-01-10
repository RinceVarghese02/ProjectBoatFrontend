import React from 'react'

const CategoriesCards = (props) => {
  return (
    <>
    <div className='w-[90px] my-6 text-center font-bold text-sm text-gray-800 leading-4 space-y-3'>
        <img src={props.data.image} />
        <h1>{props.data.name}</h1>
    </div>
    </>
  )
}

export default CategoriesCards