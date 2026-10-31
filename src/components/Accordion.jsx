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

  const [openIndex,setOnepIndex]=useState(0)

  return (
    <div className='p-2 m-auto w-[50%] mt-2'>
      {data.map((item,index)=>(

      <AccordionItem isOpen={openIndex===index} setIsOpen={()=>{
        openIndex===index ? setOnepIndex(null) :
        setOnepIndex(index)
      }} key={index} title={item.title} body={item.body}/>
      ))}
    
    </div>
  )
}

export default Accordion
  