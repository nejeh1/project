import React, { useState } from 'react'

function Teachers() {
    const [OurTeam,setOurTeam]=useState([
        {name:"Mark hamilton",degree:"Bachelor of Science in Game Development",image:"https://media.vanityfair.com/photos/6319eab06009e759e6638e28/master/w_2560%2Cc_limit/1421315651"},
        {name:"Amelia hanna",degree:"BSc in Computing Web Development",image:"https://www.masslive.com/resizer/kNl3qvErgJ3B0Cu-WSBWFYc1B8Q=/arc-anglerfish-arc2-prod-advancelocal/public/W5HI6Y4DINDTNP76R6CLA5IWRU.jpeg"},
        {name:"Adam Siraj",degree:"-Bachelor of Science in Information Systems - Web Development Concentration",image:"https://pbs.twimg.com/profile_images/861814141899620352/rilXkENS_400x400.jpg"}
    ])
  return (
    <div style={{margin:'50px'}}>
        <h1 className='titlenm'>Our Website Creator</h1>
    <div className='teacherbox'>
      {OurTeam.map((OurTeam,index)=>(
        <div>
        <div className='teachers'>
        <img src={OurTeam.image} alt={OurTeam.name}></img>
        <h2>{OurTeam.name}</h2>
        <p>{OurTeam.degree}</p>
        <p>{OurTeam.age}</p>
      </div>
      </div>
      ))}
      </div>
    </div>
  )
}

export default Teachers
