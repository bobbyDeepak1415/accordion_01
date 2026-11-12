import React, { useState } from 'react'
import AccordionItem1 from './AccordionItem1'


const data=[
  {title:"AccordioItem #1",body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti sunt qui vero fugiat aut harum illum accusantium incidunt! Optio corporis commodi delectus, dolor explicabo vitae minima a magni ullam error!"},
  {title:"AccordioItem #2",body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti sunt qui vero fugiat aut harum illum accusantium incidunt! Optio corporis commodi delectus, dolor explicabo vitae minima a magni ullam error!"},
  {title:"AccordioItem #3",body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti sunt qui vero fugiat aut harum illum accusantium incidunt! Optio corporis commodi delectus, dolor explicabo vitae minima a magni ullam error!"}
]


const Accordion1 = () => {

  const [activeIndex,setActiveIndex]=useState(0)

  return (
    <div className='border border-black w-[50%] m-auto mt-3'>

      {data.map((item,index)=>(
        <AccordionItem1 isOpen={index===activeIndex} setIsOpen={()=>
        {
index===activeIndex ? setActiveIndex(null) :
          setActiveIndex(index)
        }
        } title={item.title} body={item.body}/>
      ))}
    </div>
  )
}

export default Accordion1
