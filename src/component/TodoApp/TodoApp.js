import React, { Component } from 'react'
import "./TodoApp.css";
export default class TodoApp extends Component {
    state={
        input:"",
        items:[]
    }
    handleChage=(event)=>{
        this.setState({
            input:event.target.value
        });
        
    };
    storeItems=(event)=>{
        event.preventDefault();
        const {input}=this.state;
        
        this.setState({
            items:[...this.state.items,input],
            input:""
        });

    }
    deleteitems=(key)=>{
        const allitems=this.state.items;
        allitems.splice(key,1);
        this.setState({
            items:allitems
        });
      
    }
    render() {
        const {input,items}=this.state;
        console.log(items);
        return (
            <div className='todo-container'>
                
                <form className='input-section' onSubmit={this.storeItems}>
                <h1>Todo component</h1>

                    <input type='text' value={input} onChange={this.handleChage} placeholder='Enter Items...' />
                </form>
                <ul>
                    {items.map((data,index)=>(
                        <li key={index}>{data}<i className="fa fa-trash" aria-hidden="true" onClick={()=>this.deleteitems(index)}></i></li>
                    ))}
                </ul>
            </div>
        )
    }
}
