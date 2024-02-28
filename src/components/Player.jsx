import { useState } from 'react';
export default function Player({initialName, symbol}){
    const [playerName, setPlayername] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick(){
        setIsEditing(editing => !editing) //this is recommended apporach
        // setIsEditing(!setIsEditing) //this is  not recommended apporach

    }

    function handleChange(event){
        setPlayername(event.target.value)
    }

    return(
        <li>
        <span id="player">
          {isEditing ? (<input className="player-input" type="text" required value={playerName} onChange={handleChange}/>) //Changing value and feeding back the value is called as two way binding
          : (<span className="player-name">{playerName}</span>)}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing?"Save":"Edit"}</button>
        </li>
    )
}