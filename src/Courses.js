import React, { useState } from 'react'

function Courses() {
    const [list,setList]=useState([
        {name:'HTML',star:5,description:' It is a standard markup language for web page creation',image:'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/8/8/1/881415294f_50170557_code-html-sashkin-adobe-stock.jpg'},
        {name:'CSS',star:5,description:' is a stylesheet language used to describe the presentation of a document written in HTML',image:'https://www.skyminds.net/wp-content/uploads/2009/07/css.jpg'},
        {name:'JavaScript',star:5,description:' is a scripting language that enables you to create dynamically updating content',image:'https://miro.medium.com/v2/resize:fit:800/1*bthRXJ_FBspSEijOWIRM2A.png'}
        ,{name:'HTML',star:5,description:' It is a standard markup language for web page creation',image:'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/8/8/1/881415294f_50170557_code-html-sashkin-adobe-stock.jpg'},
        {name:'CSS',star:5,description:' is a stylesheet language used to describe the presentation of a document written in HTML',image:'https://www.skyminds.net/wp-content/uploads/2009/07/css.jpg'},
        {name:'JavaScript',star:5,description:' is a scripting language that enables you to create dynamically updating content',image:'https://miro.medium.com/v2/resize:fit:800/1*bthRXJ_FBspSEijOWIRM2A.png'}
        ,{name:'HTML',star:5,description:' It is a standard markup language for web page creation',image:'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/8/8/1/881415294f_50170557_code-html-sashkin-adobe-stock.jpg'},
        {name:'CSS',star:5,description:' is a stylesheet language used to describe the presentation of a document written in HTML',image:'https://www.skyminds.net/wp-content/uploads/2009/07/css.jpg'},
        {name:'JavaScript',star:5,description:' is a scripting language that enables you to create dynamically updating content',image:'https://miro.medium.com/v2/resize:fit:800/1*bthRXJ_FBspSEijOWIRM2A.png'}
      ])

  return (
    <div className='bloc'>
      {list.map((list,index)=>(
        
        <div key={index} className='card'>
        <img src={list.image} alt={list.name}></img>
        <h1>{list.name}</h1>
        <p>{list.star}</p>
        <p>{list.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Courses;
