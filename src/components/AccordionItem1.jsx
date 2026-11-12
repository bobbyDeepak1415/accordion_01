import React, { useState } from 'react'

const AccordionItem1 = ({title,body,isOpen,setIsOpen}) => {

  // const [isOpen,setIsOpen]=useState(true)

  return (
    <div >
      <div onClick={()=>setIsOpen(prev=>!prev)} className='border p-2 bg-blue-300 flex justify-between'>
<span>

      {title}
</span>
<span>⬇️</span>
      </div>

      {isOpen && (
<div className='p-2 bg-slate-300'>
        {body}
      </div>

      )}
      
    </div>
  )
}

export default AccordionItem1
