import React from 'react'
import AccordionItem1 from './AccordionItem1'


const data=[
    {title:"AccordionItem #1",body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam enim ipsam iusto recusandae modi maiores itaque provident natus eos animi, sit fugit, earum temporibus unde quia officia quos id eveniet?"},
    {title:"AccordionItem #2",body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam enim ipsam iusto recusandae modi maiores itaque provident natus eos animi, sit fugit, earum temporibus unde quia officia quos id eveniet?"},
    {title:"AccordionItem #3",body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam enim ipsam iusto recusandae modi maiores itaque provident natus eos animi, sit fugit, earum temporibus unde quia officia quos id eveniet?"},
]


const Accordion1 = () => {
  return (
    <div className='w-[50%] m-auto mt-2 '>

      {data.map((item)=>{
        return <AccordionItem1 title={item.title} />
      })}
    </div>
  )
}

export default Accordion1
