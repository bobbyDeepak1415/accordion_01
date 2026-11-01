import React from 'react'

const AccordionItem = ({title,body}) => {
  return (
    <div className='border border-black'>
      <div className='bg-slate-300 p-2 font-bold text-xl cursor-pointer'>

      {title}
      </div>
      <div className='p-2'>

      {body}
      </div>
    </div>
  )
}

export default AccordionItem

