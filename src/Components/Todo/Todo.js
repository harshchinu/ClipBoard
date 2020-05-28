import React from 'react';
import { Button } from '@material-ui/core';

const Todo = (props)=>{
    return(
    <div>
    <input type='text' onChange={props.onchange} value={props.current} onKeyUp={props.onchange}/>
    <Button variant="contained" color="primary" onClick={props.add}>Add</Button>
    </div>
    );
}

export default Todo;