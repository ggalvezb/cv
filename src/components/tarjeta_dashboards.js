import React,{Component} from 'react';
import {Tabs,Tab, Grid,Cell,Card,CardText,CardTitle,CardActions,Button,CardMenu,IconButton} from 'react-mdl';

class Dashboard_class extends Component{
    render(){
        return(
            <Grid>
            <Cell col={1} align="middle">
            </Cell>
            <Cell col={10} align="middle">
              <h1>{this.props.titulo}</h1>
              <Card shadow={0} style={{ width: "auto", margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "#fff",
                    height: "176px",
                    background:
                      "url(" +this.props.image_card+") center / cover",
                  }}
                ></CardTitle>
                <CardText>
                    {this.props.descripcion}
                </CardText>
                <CardActions border>
                  <a
                    href={this.props.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Button colored>{this.props.nombre_boton}</Button>
                  </a>
                </CardActions>
                <CardActions border>
                  <a
                    href={this.props.link_2}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Button colored>{this.props.nombre_boton_2}</Button>
                  </a>
                </CardActions>
                <CardMenu style={{ color: "#fff" }}></CardMenu>
              </Card>
            </Cell>
           </Grid>

        )
    }
}

export default Dashboard_class;

