import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import CardHeader from "@material-ui/core/CardHeader";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloseIcon from '@material-ui/icons/Close'
import Grid from '@material-ui/core/Grid/'
import Paper from '@material-ui/core/Paper'


const TodDisplay = (props)=>{
    const useStyles = makeStyles({
        root: {
          maxWidth: 400
          
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
          },
        title: {
          fontSize: 14
        },
        pos: {
          marginBottom: 12
        }
      });

      
    

      let data=props.data
      if(props.editable){
        data=(<input type='text' 
        value={props.data} 
        onChange={props.editInput}
        onKeyUp={props.enter} />
        )
      }
      
    return(

       
   <Card className={useStyles.root}>
   <CardHeader
   action={
     <IconButton aria-label="settings">
       <MoreVertIcon/>
     </IconButton>
   }
   title="Label Display"
   deadline="September 14, 2016"
 />
   <CardContent>
     <Typography
       className={useStyles.title}
       color="textSecondary"
       gutterBottom>
       Word of the Day
     </Typography>
     <Typography variant="h5" component="h2" onDoubleClick={props.dbclick}>
       {data}
     </Typography>
   </CardContent>
   <CardActions>
     <Button size="small" onClick={props.click}>Delete</Button>
     <CloseIcon onClick={props.click}/>
   </CardActions>
 </Card>

   

    

    )
}

export default TodDisplay;