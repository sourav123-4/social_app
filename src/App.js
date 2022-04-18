import './App.css';
import {React,useState} from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import Details from './Components/Details';
import About from './Components/About';
import Error from './Components/Error';
import SignIn from './Components/SignIn';
function App() {
  const [user,setUser]=useState([])
  const [photos,setPhotos]=useState([])
  const [albums,setAlbums]=useState([])
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [imagedetails,setImagedetails]=useState("")
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home 
                                    user={user}
                                    setUser={setUser}
                                    photos={photos}
                                    setPhotos={setPhotos}
                                    albums={albums}
                                    setAlbums={setAlbums}
                                    setImagedetails={setImagedetails}
                                        />}>
          <Route path='details' element={<Details 
                                    user={user}
                                    setUser={setUser}
                                    photos={photos}
                                    setPhotos={setPhotos}
                                    albums={albums}
                                    setAlbums={setAlbums}
                                    username={username}
                                    email={email}
                                    imagedetails={imagedetails}
                                    
                                    />}/>
          <Route path="login" element={<SignIn setUsername={setUsername} setEmail={setEmail}/>}/>
        </Route>
        <Route path='/about' element={<About/>}/>
        
        <Route path="*" element={<Error/>}/>
      </Routes>      
    </div>
  );
}

export default App;
