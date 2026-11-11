import React, { useState } from 'react'

const AccordionItem = ({title,body,isOpen,setIsOpen}) => {

  // const [isOpen,setIsOpen]=useState(true)

  return (
    <div className='m-auto border border-black'>
      <div onClick={()=>setIsOpen(prev=>!prev)} className='bg-slate-300 p-2 cursor-pointer flex justify-between'>
        
        <span>

        {title}
        </span>
        <span>
          ⬇️
        </span>
        </div>

{isOpen && 

<div className='p-2'>{body}</div>
}


    </div>
  )
}

export default AccordionItem
