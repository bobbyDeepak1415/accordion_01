import React, { useState } from 'react'
import AccordionItem from './AccordionItem'


const data=[
    {title:"Accordion item #1",
        body:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus rem quasi in nesciunt soluta beatae, corrupti quaerat amet architecto omnis non ratione, ea provident? Nihil deserunt dolore obcaecati, quam omnis officia repellat sequi temporibus natus ratione vero vel suscipit fugit molestias culpa? Molestiae velit natus, neque beatae deleniti libero adipisci!"
    },
    {title:"Accordion item #2",
        body:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus rem quasi in nesciunt soluta beatae, corrupti quaerat amet architecto omnis non ratione, ea provident? Nihil deserunt dolore obcaecati, quam omnis officia repellat sequi temporibus natus ratione vero vel suscipit fugit molestias culpa? Molestiae velit natus, neque beatae deleniti libero adipisci!"
    },
    {title:"Accordion item #3",
        body:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus rem quasi in nesciunt soluta beatae, corrupti quaerat amet architecto omnis non ratione, ea provident? Nihil deserunt dolore obcaecati, quam omnis officia repellat sequi temporibus natus ratione vero vel suscipit fugit molestias culpa? Molestiae velit natus, neque beatae deleniti libero adipisci!"
    },
]

const Accordion = () => {

  const [openIndex,setOpenIndex]=useState(1)


  return (
    <div className='w-[50%] m-auto mt-5'>
      {data.map((item,index)=>(<AccordionItem isOpen={index===openIndex} setIsOpen={()=>{
        setOpenIndex(index)
      }} title={item.title} key={index} body={item.body}/>))}
    </div>
  )
}

export default Accordion
  