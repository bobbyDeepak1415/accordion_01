import React, { useState } from 'react'

const AccordionItem = ({title,body,isOpen,setIsOpen}) => {

  return (
    <div className='border border-black rounded-lg'>
        <div className='font-bold p-2 bg-slate-300 flex justify-between cursor-pointer'  onClick={()=>setIsOpen(prev=>!prev)} >
<span>

      {title}
</span>
<span>
  
  ⬇️
</span>
        </div>
      {isOpen && <div className='p-2'>{body}</div>}
    </div>
  )
}

export default AccordionItem
