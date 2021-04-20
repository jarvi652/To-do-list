import React from 'react'
 
class Navbar extends React.Component{
    render(){ 
        return(
            <div className ="navbar">
                <p className= "nav-item">Home</p>
                <p className= "nav-item">About</p>
                <p className= "nav-item">Status</p>
            </div>
        )
    }
}
export default Navbar