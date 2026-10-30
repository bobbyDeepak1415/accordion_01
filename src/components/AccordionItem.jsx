import React from 'react'

const AccordionItem = ({title,body}) => {
  return (
    <div>
        <div className='font-bold p-2 bg-slate-300 flex justify-between' >
<span>

      {title}
</span>
<span>
  ⬇️
</span>
        </div>
        <div className='p-2'>

      {body}
        </div>
    </div>
  )
}

export default AccordionItem
