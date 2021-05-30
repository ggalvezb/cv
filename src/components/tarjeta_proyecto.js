import React,{Component} from 'react';
import {Tabs,Tab, Grid,Cell,Card,CardText,CardTitle,CardActions,Button,CardMenu,IconButton} from 'react-mdl';

class Project extends Component{
    render(){
        return(
         <Cell col={4}>
             <Card shadow={0} style={{width: '290px', height: '350px', margin: 'auto'}}>
                <CardTitle style={{color: 'white', height: '176px',background: 'url('+this.props.image_card+') center / cover'}}>
                <p className='Cards_title_1'>{this.props.titulo}</p>
                </CardTitle>
                <CardText>
                    {this.props.descripcion}
                </CardText>
                <CardActions border>
                    <a href={this.props.link}rel="noopener noreferrer" target="_blank">
                    <Button colored>{this.props.nombre_boton}</Button>
                    </a>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>                           
        </Cell>
        )
    }
}

export default Project;