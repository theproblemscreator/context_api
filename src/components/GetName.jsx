import React, { useContext, useState } from 'react'
import {NameContext} from './NameContext';

export default function GetName() {
  const [username, setUsername] = useState("");
  const { setName ,name} = useContext(NameContext);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

const handleClick = ()=>{
  console.log({username,email});
  setName(username);
}
  return (
    <div>
     <h1>Setting the Username from This File</h1>
      <input type="text"
        value={username}
        onChange={handleInputChange}
        placeholder='Enter Name'

      />
 
<h2>Base Component : {name} </h2>

      <button type="submit" onClick={handleClick}>Submit</button>
      
    </div>
  )
}
