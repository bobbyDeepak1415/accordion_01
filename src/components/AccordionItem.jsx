import React from 'react'

const AccordionItem = ({title,body}) => {
  return (
    <div className='border border-black rounded-lg mt-2'>
      <div className='bg-slate-300 p-2 font-bold flex justify-between'>
        <span>

        {title} 
        </span>
        <span>
          ⬇️
        </span>
        </div>
      <div className='p-2'>{body}</div>
    </div>
  )
}

export default AccordionItem
