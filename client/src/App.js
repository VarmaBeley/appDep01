import axios from "axios";
import React, {useState} from "react";
import './App.css';

function App() {

  let [cricketers, setCricketers] = useState([]);
  let [students,setStudents] = useState([]);

  let getCricketers = async()=>{
     let responce = await axios.get("/indianCricketers")

     setCricketers(responce.data);
     console.log(responce.data);
  }

  let getUsersFromAtlas = async()=>{

    let response = await axios.get("/getUsers");

    setStudents(response.data)

    console.log(response.data);
  }

  return (
    <div className="App">
      <button onClick={()=>{
         getCricketers()
      }} >Get Cricketers</button>

<button onClick={()=>{
         getUsersFromAtlas()
      }} >Get Users</button>

      {
        cricketers.map((players)=>{
           return <h2>{players}</h2>
        })
      }

      {
        students.map((student)=>{
          return <h2>{student.name}</h2>
        })
      }
    </div>
  );
}

export default App;
