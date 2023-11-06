import React from 'react'
import Request from '../request/Request'

const Requests = ({data}) => {
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '30px'}}>
        {
            data.map(el => {
                return (
                    <Request data={el} key={el.id}/>
                )
            })
        }
    </div>
  )
}

export default Requests