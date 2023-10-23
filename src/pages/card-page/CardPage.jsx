import React from 'react'
import { useParams } from 'react-router-dom'

const CardPage = () => {

    const {itemId} = useParams()

  return (
    <div>{itemId}</div>
  )
}

export default CardPage