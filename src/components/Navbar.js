import React from 'react'
 
class Navbar extends React.Component{
    render(){ 
        return(
            <div className ="navbar">
                <p className= "nav-item">To-do-App</p>
                <button className= "btn">Add-task</button>
                    
            </div>
        )
    }
}
export default Navbar