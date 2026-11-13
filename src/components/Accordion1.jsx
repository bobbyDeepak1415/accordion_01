import React, { useState } from 'react'
import AccordionItem1 from './AccordionItem1'


const data=[
  {title:"AccordionItem #1",body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, iusto. Dolorem veniam molestiae blanditiis laborum voluptatum pariatur obcaecati fugiat ea dignissimos voluptatem exercitationem soluta atque alias saepe similique, eveniet error!"},
  {title:"AccordionItem #2",body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, iusto. Dolorem veniam molestiae blanditiis laborum voluptatum pariatur obcaecati fugiat ea dignissimos voluptatem exercitationem soluta atque alias saepe similique, eveniet error!"},
  {title:"AccordionItem #3",body:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, iusto. Dolorem veniam molestiae blanditiis laborum voluptatum pariatur obcaecati fugiat ea dignissimos voluptatem exercitationem soluta atque alias saepe similique, eveniet error!"},
]


const Accordion1 = () => {

  const [openIndex,setOpenIndex]=useState(0)

  return (
    <div className='border w-[50vw] m-auto mt-2'>
      {data.map((item,index)=>(
        <AccordionItem1 title={item.title} body={item.body} key={index}/>
      ))}
    </div>
  )
}

export default Accordion1
