import React from 'react'

function Maincontent(props){
    return(
        <div className="to_do_item">
            <input type ="checkbox" 
            changed={props.item.completed}onChange ={() => props.handleChange(props.item.id)}/>
            <p>{props.item}</p>
        </div>
    )
}

export default Maincontent