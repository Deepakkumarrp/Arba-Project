import React from 'react'

function SingleProduct({item}) {
    const {id,title,body} = item;
  return (
    <div>
        <h5>ID:{id}</h5>
        <p>TITLE: {title}</p>
        <span>{body}</span>
    </div>
  )
}

export default SingleProduct