import React from 'react';
import '../styles/Task.css';

const Task = (props) => {

    const {work, id, important, done} = props.task;
    const styleStar = {
        color:"yellow",
    }
    const styleCircle = {
        color:"green",
    }
    const styleLi = {
       
    }

    return (  
        <>
    
        <li style={done?{opacity:".6"}:null || important?{backgroundColor:'rgb(243, 239, 190)'}:null}> 
            <div className="icons">
            <i style={important?styleStar:null}onClick={() => props.important(id)}className="far fa-star"></i>
            <i style={done?styleCircle:null}onClick={() => props.done(id)} className="far fa-check-circle"></i>
             <p className='work'>{work}</p>
            <button className='remove' onClick={() => props.delete(id)}>X</button>
            </div>
            
        </li>
    
        </>
    );
}
 
export default Task;