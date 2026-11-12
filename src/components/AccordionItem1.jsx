import React, { useState } from 'react'

const AccordionItem1 = ({title,body,isOpen,setIsOpen}) => {

  // const [isOpen,setIsOpen]=useState(false)

  return (
    <div>
      <div onClick={()=>setIsOpen(prev=>!prev)} className='p-2 border bg-blue-300 flex justify-between'>
        <span>{title}</span>
        <span>⬇️</span>
      </div>

      {isOpen && (

      <div className='bg-slate-300 p-2'>
        {body}
      </div>
      )}
    </div>
  )
}

export default AccordionItem1



