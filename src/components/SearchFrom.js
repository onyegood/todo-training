import React from 'react'

const SearchFrom = () => {

  return (
    <form className='search'>
      <input
        className='form-control m-auto'
        type='text'
        name='search'
        placeholder='search todos'
      />
    </form>
  )
}

export default SearchFrom;
