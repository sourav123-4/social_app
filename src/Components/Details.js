import React from 'react'

function Details(props) {
  return (
    <div>
        {props.user.map((item)=>{
          if(item.username===props.username && item.email===props.email){
            return <div>
                <h3>Name: {item.name}</h3>
                <h4>Phone: {item.phone}</h4>
                <h4>Website: {item.website}</h4>
              </div>
          }else if(item.id===props.imagedetails){
            return <div>
              <h3>Name: {item.name}</h3>
              <h4>Phone: {item.phone}</h4>
              <h4>Website: {item.website}</h4>
            </div>
          }
        })}
    </div>
  )
}

export default Details