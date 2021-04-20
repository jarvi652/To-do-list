import React from 'react'
import Maincontent from './components/Maincontent'
import Navbar from './components/Navbar'
import './App.css'
import Tododata from './components/To_do_data' 


class App extends React.Component{
  constructor(){
    super()
    this.state ={
      todos: Tododata
    }
    this.handleChange=this.handleChange.bind(this)
  }
  handleChange(id){
    this.setState(prevState =>{
      const updatedtodos = prevState.todos.map(todo => {
        if (todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return{
        todos:updatedtodos
      }
    })
  }
    
    
    
  
  render(){
    const todoitem = this.state.todos.map(item => <Maincontent key={item.id} item = {item.item} change ={item.change} handleChange ={this.handleChange} />)
    
    return(
      <div>
        <Navbar />
        {todoitem}
      </div>
    )
  }
}
export default App