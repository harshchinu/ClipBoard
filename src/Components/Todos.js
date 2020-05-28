import React from 'react';
import TodoDisplay from './TodoDisplay/TodoDisplay'
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 1024,
      height: 450,
    },
  }));


const Todos = (props)=>{

    const classes = useStyles();
    
    return (
     
     /*<div className={classes.root}>
      <GridList cellHeight={400}className={classes.gridList} cols={5}>
        {props.data.map((todos,index) => (
          <GridListTile key={todos.id}>
            <TodoDisplay click={()=>props.delete(index)} 
            key={todos.id} 
            data={todos.description} 
            dbclick={()=>props.edit(todos.id)}  
            editable={todos.editable}
            editInput={(event)=>props.editInput(event,todos.id)}
            enter={(e)=>props.enter(e,todos.id)}
            
            
            />
          </GridListTile>
        ))}
      </GridList>
    </div>*/
    <div>
      <Grid container direction="column">
      <Grid item xs={0} sm={2} />
        <Grid item xs={12} sm={8}>
          {props.data.map((todos,index)=>{
            return(
              <TodoDisplay
            key={todos.id} 
            data={todos.description} 
            dbclick={()=>props.edit(todos.id)}  
            editable={todos.editable}
            editInput={(event)=>props.editInput(event,todos.id)}
            enter={(e)=>props.enter(e,todos.id)}
              
              />
            )
          })}
          
      </Grid>
      <Grid item xs={0} sm={2} />
      </Grid>
    </div>
    )
    
    /*props.data.map((todos,index) =>{
        return (

            

            <TodoDisplay click={()=>props.delete(index)} key={todos.id} data={todos.description}  />

        )
   })*/
}

export default Todos;