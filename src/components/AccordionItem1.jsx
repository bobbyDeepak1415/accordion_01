import React from 'react'

const AccordionItem1 = ({title,body}) => {
  return (
    <div >
      <div className='border p-2 bg-blue-300 flex justify-between'>
<span>

      {title}
</span>
<span>⬇️</span>
      </div>
      <div className='p-2 bg-slate-300'>
        {body}
      </div>

    </div>
  )
}

export default AccordionItem1
