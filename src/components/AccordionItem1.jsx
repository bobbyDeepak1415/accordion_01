import React from 'react'

const AccordionItem1 = ({title}) => {
  return (
    <div className='border border-black'>
      <div className='p-2 bg-blue-300 flex justify-between'>
        <span>

        {title}
        </span>
        <span>⬇️</span>
        <div>
            
        </div>
        </div>
    </div>
  )
}

export default AccordionItem1
