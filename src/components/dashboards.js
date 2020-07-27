import React, {Componen, Component} from 'react';
import {Grid,Cell,Card,CardTitle,CardText,CardActions,Button,IconButton,CardMenu} from 'react-mdl'
import {Link} from 'react-router-dom';


class Dashboard extends Component{
    render(){
        return(
           <div>
               <Grid>
                   <Cell col={12} align='middle'>
                   <h1>Streaming Twitter</h1>
                        <Card shadow={0} style={{width: 'auto', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.pixabay.com/photo/2018/04/14/18/06/twitter-3319619_1280.jpg) center / cover'}}></CardTitle>
                            <CardText>
                            Este dashboard muestra un proyecto de straming de datos de twitter, ejecutado con 
                            Python, MongoDB y PowerBI.
                            </CardText>
                            <CardActions border>
                            <Button raised colored>
                                <Link to="/reporte_twitter" style={{color:'white'}}>VER</Link>
                            </Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                            
                            </CardMenu>
                        </Card>
                   </Cell>
               </Grid>
           </div>
        )
    }
}
export default Dashboard;