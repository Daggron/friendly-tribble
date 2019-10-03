import React from 'react';
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state={
      newItem:"",
      List:[]

    }
  }

  insert(todoVal){
    if(todoVal!==""){
      let newItem={
        id:Date.now(),
        value : todoVal,
        isDone:false
      }

      let list = [...this.state.List];
      list.push(newItem);
      this.setState({
        newItem:"",
        List:list
      });


    }
  }

  delete(id){

    let list = [...this.state.List];
    let newList = list.filter(item => item.id!==id);

    this.setState({
      List:newList
    });
  }

  update(input){
    this.setState({
      newItem:input
    })
  }

  done(id){
    const list = [...this.state.List];

    list.map(item=>{

      if(item.id===id){
        return item.isDone=!item.isDone;
      }
       
    });

    this.setState({
      List:list
    });

    console.log(this.state.List);
    
    

  }


  render(){

        
        return(
          <div className="App">
              <h1>
                To-Do
              </h1>
              <div className="container">
                Add an item ...
                <br />

                <input type="text" className="input-text"  value={this.state.newItem} onChange={(e)=>this.update(e.target.value)}/>
                <button onClick={()=> this.insert(this.state.newItem)} className="add-btn">
                  Submit
                </button>
                <div className="list">
                  <ul>
                    {
                      this.state.List.map(item =>{
                        return (
                          
                            <li key={item.id}>
                            <input type="checkbox" onChange={()=>this.done(item.id)} />
                           
                            {
                              item.isDone ?(
                                <del>{item.value}</del>
                              ):(
                                item.value
                              )

                            }

                            <button className="btn" onClick={()=>this.delete(item.id)}>
                              Delete
                            </button>
                           </li>
                          
                        )
                      })
                    }
                   
                  </ul>
                </div>

              </div>
          </div>
        )
  }
}


export default App;
