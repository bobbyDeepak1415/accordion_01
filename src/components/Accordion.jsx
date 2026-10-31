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
  

// next round if asked i will say i am good at claude opus 5.5. i want you to predict what  might be asked about these. take wat my friend said as a reference if needed. something like this "etting up custom skills/instructions in AI tools settings.

// MCP (Model Context Protocol) to connect external data sources/APIs directly to the AI model.

// Setting constraints so AI agents don't make unauthorized/destructive codebase changes.

// Best practices for developer workflows: close monitoring/code review, questioning agent decisions before committing, maintaining single threads for context retention/token savings, and understanding the distinction between Models (Sonnet, Opus, etc.) vs. Agents."

// remember it is not a deal breaker because it is not an AI engineer role. the recruiter themselves has said that just familiarize yourself and talk about it. explain the topics like defining skills in settings, mcp connection to other website to fetch data,defining constraints etc