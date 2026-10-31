import React, { useState } from 'react'

const AccordionItem = ({title,body}) => {

  const [isOpen,setIsOpen]=useState(true)
  return (
    <div>
        <div className='font-bold p-2 bg-slate-300 flex justify-between cursor-pointer' onClick={()=>setIsOpen(prev=>!prev)} >
<span>

      {title}
</span>
<span>
  
  ⬇️
</span>
        </div>
        <div className='p-2'>
          

      {isOpen && body}
        </div>
    </div>
  )
}

export default AccordionItem
