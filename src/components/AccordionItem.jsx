import React, { useState } from 'react'

const AccordionItem = ({title,body,isOpen,setIsOpen}) => {


  return (
    <div className='border border-black'>
      <div onClick={()=>setIsOpen(prev=>!prev)} className='bg-slate-300 p-2 font-bold text-xl cursor-pointer flex justify-between'>
<span>

      {title}
</span>
<span>

      ⬇️
</span>
      </div>

      {isOpen && 
      
      <div className='p-2' >

      {body}
      </div>
      
      }
    </div>
  )
}

export default AccordionItem

