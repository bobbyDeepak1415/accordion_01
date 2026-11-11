import React from 'react'

const AccordionItem1 = ({title,body,activeIndex,setActiveIndex}) => {
  return (
    <div className='border border-black'>
      <div  className='p-2 bg-blue-300 flex justify-between'>
        <span>

        {title}
        </span>
        <span>⬇️</span>
        </div>
        <div className='p-2 bg-slate-200'>
{body}
        </div>
    </div>
  )
}

export default AccordionItem1
