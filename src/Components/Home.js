import {React,useEffect, useState} from 'react'
import { Outlet,Link} from 'react-router-dom'
import logo from './download.png'
function Home(props) {
  
  
  const getUsers=async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await res.json()
    console.log(data)
    props.setUser(data)
  }
  const getPhotos=async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/photos')
    const data=await res.json()
    console.log(data)
    props.setPhotos(data)
  }
  const getAlbums=async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/albums')
    const data=await res.json()
    console.log(data)
    props.setAlbums(data)
  }
  useEffect(()=>{
    getUsers()
    getPhotos()
    getAlbums()
  },[])
  return (
    <div>
      <div class="container">
        <div class="row ">
          <div class="col"><Link to="/"><img src={logo} alt="logo" width="50px" height="50px"/></Link></div>
          <div class="col"><h1>SOCIAL APP</h1></div>
          <div class="col"><Link to="/login"><button>SignIn</button></Link></div>
        </div>
      </div>
      <hr/>
      <Outlet/>
      {/* <h1>main part</h1> */}
      {/* {
        user.map((curElement)=>{
          return <h3>{curElement['name']}</h3>
        })
      } */}
      <div class="row">
      {
        props.photos.map((item)=>{
          if(item.id<=10){
            return (
                  <div class="col">
                    <Link to="/details" ><img src={item.url} width="200px" height="200px" onClick={()=>props.setImagedetails(item.id)}/></Link>
                    <p>{item.title}</p>
                  </div>
            )
          }
        })
      }
      </div>
      <hr/>
      <h1>Footer</h1>
    </div>
  )
}

export default Home