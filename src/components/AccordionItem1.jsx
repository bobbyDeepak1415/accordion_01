import React, { useState } from 'react'

const AccordionItem1 = ({title,body,activeIndex,setActiveIndex,index}) => {

  const [isOpen,setIsOpen]=useState(true)

  return (
    <div className='border border-black'>
      <div onClick={()=>setIsOpen(false)}  className='p-2 bg-blue-300 flex justify-between'>
        <span>

        {title}
        </span>
        <span>⬇️</span>
        </div>
        {isOpen &&(

              <div  className='p-2 bg-slate-200'>

{body}
        </div>
        )}
      
    </div>
  )
}

export default AccordionItem1
