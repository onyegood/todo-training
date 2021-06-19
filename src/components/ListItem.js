import React from 'react'

const ListItem = ({ title, status, id, clickable }) => {
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      <span>{title}</span>
      <span
        className={`text-${
          status === 'Done'
            ? 'success'
            : status === 'Inprogress'
            ? 'warning'
            : 'danger'
        }`}
      >
        {status}
      </span>
      <i onClick={() => clickable(id)} className='far fa-trash-alt delete' />
    </li>
  )
}

export default ListItem
