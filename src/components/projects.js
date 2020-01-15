import React,{Component} from 'react';
import {Tabs,Tab, Grid,Cell,Card,CardText,CardTitle,CardActions,Button,CardMenu,IconButton} from 'react-mdl';


class Projects extends Component{
    constructor(props){
        super(props);
        this.state={activeTab:0};
    }

    toggleCategories(){
        if(this.state.activateTab===0){
            return(
                <div className="projects-grid">
                    {/* proyecto 1 */}
                    <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.redeszone.net/app/uploads/2018/07/C%C3%B3digo-Python.jpg) center / cover'}}>
                        Algun proyecto de python
                        </CardTitle>
                        <CardText>
                            Aquí va una descripcion del proyecto y si lo pinchas te deberia llevar a github
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* proyecto 2 */}
                    <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.redeszone.net/app/uploads/2018/07/C%C3%B3digo-Python.jpg) center / cover'}}>
                        Algun otro proyecto de python
                        </CardTitle>
                        <CardText>
                            Aquí va una descripcion del proyecto y si lo pinchas te deberia llevar a github
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    </div>
            )
        }
        else if(this.state.activateTab===1){
            return(
                <div className="projects-grid">
                    {/* proyecto 1 */}
                    <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.artelys.com/wp-content/uploads/2018/11/formation4.jpg) center / cover'}}>
                        Algun proyecto de Optimizacion
                        </CardTitle>
                        <CardText>
                            Aquí va una descripcion del proyecto y si lo pinchas te deberia llevar a github
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if(this.state.activateTab===2){
            return(
                <div><h1>Esto es ML</h1></div>
            )
        }
    }



    render(){
        return(
            <div>
                <Tabs activateTab={this.state.activateTab} onChange={(tabId)=>this.setState({activateTab: tabId })}ripple>
                    <Tab>Python</Tab>
                    <Tab>Optimizacion</Tab>
                    <Tab>Machine Learning</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                    <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}
export default Projects;