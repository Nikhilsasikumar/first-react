import React, { Component } from 'react'
import "./TodoApp.css";
export default class TodoApp extends Component {
    render() {
        return (
            <div className='todo-container'>
                
                <form className='input-section'>
                <h1>Todo component</h1>

                    <input type='text' placeholder='Enter Items...' />
                </form>
                <ul>
                    <li>Items <i className="fa fa-trash" aria-hidden="true"></i></li>
                    <li>Items <i className="fa fa-trash" aria-hidden="true"></i></li>

                    <li>Items <i className="fa fa-trash" aria-hidden="true"></i></li>

                </ul>
            </div>
        )
    }
}
