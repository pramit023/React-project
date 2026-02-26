import React from 'react'

import Card from './components/card'

const App=()=> {
  const jobOpenings = [
  {
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/250px-Google_Favicon_2025.svg.png",
    name: "Google",
    dateposted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s",
    name: "Microsoft",
    dateposted: "2 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hr",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://pbs.twimg.com/media/FIiSBxkWUAcgS7Z.jpg",
    name: "Amazon",
    dateposted: "1 week ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$35/hr",
    location: "Delhi, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzZPJAE0dqPukUcuiRdQe0U0oNM6IM7B_ZSA&s",
    name: "Meta",
    dateposted: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSymwdtxCSKJoGnys2K6LyndJeuy3IzuWg_w&s",
    name: "Netflix",
    dateposted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Pune, India"
  },
  {
    brandlogo: "https://images.seeklogo.com/logo-png/32/2/tesla-logo-png_seeklogo-329764.png",
    name: "Tesla",
    dateposted: "4 days ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Chennai, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQduXJREqBe_A7tkWoD48jL35xRpT_WaxP_tQ&s",
    name: "Adobe",
    dateposted: "2 weeks ago",
    post: "Graphic Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$30/hr",
    location: "Kolkata, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnM8U7Fu9UbOMCakFdEen8a8sl_EavE10XHw&s",
    name: "Uber",
    dateposted: "1 day ago",
    post: "Data Analyst",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$42/hr",
    location: "Noida, India"
  },
  {
    brandlogo: "https://fabrikbrands.com/wp-content/uploads/Oracle-Logo-History-4-864x540.png",
    name: "Oracle",
    dateposted: "8 days ago",
    post: "Mobile App Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$58/hr",
    location: "Jaipur, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Iplxbc62jGKxacuSIjQTm8JAAMhVWCJFeA&s ",
    name: "Spotify",
    dateposted: "10 days ago",
    post: "Product Manager",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Gurgaon, India"
  }
];
console.log(jobOpenings)

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        
        return <div key={idx}> 
          <Card company={elem.name} post={elem.post} location={elem.location} pay={elem.pay} tag1={elem.tag1} tag2={elem.tag2} brandlogo={elem.brandlogo} dateposted={elem.dateposted}/>
        </div>
      })}
       </div>
  )
}

export default App