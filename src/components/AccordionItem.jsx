import React, { useState } from 'react'

const AccordionItem = ({title,body,isOpen,setIsOpen}) => {


  return (
    <div className='border border-black rounded-lg'>
      <div className='bg-slate-300 p-2 font-bold flex justify-between' onClick={()=>setIsOpen(prev=>!prev)}>
        <span>

        {title} 
        </span>
        <span>
          ⬇️
        </span>
        </div>
{isOpen &&   <div className='p-2'>{body}</div>
    }

      
      
    
    
    </div>
  )
}

export default AccordionItem

....
