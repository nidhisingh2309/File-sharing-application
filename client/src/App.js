import { useEffect, useRef,useState } from 'react';
import './App.css';
import { uploadFile } from './services/api';
import Navbar from './components/navbar';


function App() {

  const [file,setFile]=useState('');
  //showing the link on screen in frontend

  const [result,setResult]=useState('');



  const fileInputRef=useRef();

  const logo="https://e1.pxfuel.com/desktop-wallpaper/289/718/desktop-wallpaper-best-beautiful-nature-fantastic-nature-thumbnail.jpg";
  
useEffect(()=>{
  const getImage=async()=>{
    if(file){
      const data=new FormData();
      data.append("name",file.name);
      data.append("file",file);

      let response=await uploadFile(data);

      setResult(response.path);
    }
  }

  getImage();

},[file])

  const onUploadClick=()=>{
    fileInputRef.current.click();
  }

  console.log(file);
  return (
   
    <div className='container'>
         <Navbar/>
   
      <img src={logo} alt="banner"/>
      <div className='wrapper'>
        <h1>Simple file sharing!</h1>
        <p>Upload and share the download link</p>
        <button onClick={()=>onUploadClick()}>Upload</button>
        <input type="file"
        ref={fileInputRef}
         style={{display:'none'}}
         onChange={(e)=>setFile(e.target.files[0])}
        />
          
        <a href={result} target="_blank">{result}</a>
      
      </div>
      
    
    </div>
    
  );
}

export default App;
