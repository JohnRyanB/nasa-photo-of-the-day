import React from "react";
import "./App.css";
import  PictureOfDay from './components/Pic'


function App() {
  // const [picture, setPicture] = useState([])

  // useEffect(() =>{
  //   // axios.get('https://api.nasa.gov/planetary/apod')
  //       axios.get(`https://api.nasa.gov/planetary/apod?api_key=CyUK7LBgHVWQFpbwoubWdWD3bQ4H4gP9IWFa3oYF`)
  //   .then((data) =>  console.log(data))
  //   .catch((err) => console.log('error getting picture', err))},[])




  return(
    
    <div className="App">

<PictureOfDay></PictureOfDay>

    </div>
  );
}

export default App;
