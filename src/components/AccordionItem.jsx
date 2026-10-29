import React from 'react'

const AccordionItem = ({title,body}) => {
  return (
    <div>
        <div className='font-bold p-2'>

      {title}
        </div>
        <div className='p-2'>

      {body}
        </div>
    </div>
  )
}

export default AccordionItem
