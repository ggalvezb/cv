import React,{Component} from 'react';
import {Tabs,Tab, Grid,Cell,Card,CardText,CardTitle,CardActions,Button,CardMenu,IconButton} from 'react-mdl';


class Projects extends Component{
    constructor(props){
        super(props);
        this.state={activeTab:0};
    }

    toggleCategories(){

        /* SIMULACION*/
        if(this.state.activateTab===0){
            return(
                <div className="projects-grid">
                    {/* proyecto 1 */}
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background:'url(https://www.maritimoportuario.cl/mp/wp-content/uploads/2015/09/tsunami-evacuacion.jpg) center / cover'}}>
                        Simulación Evacuación Antofagasta
                        </CardTitle>
                        <CardText>
                            El simulador se encarga de generar 3 escenarios de escape para la ciudad
                            de Antofagasta y recopilar sus estadisticas. 
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/ggalvezb/Simulacion-evacuacion-antofagasta"rel="noopener noreferrer" target="_blank">
                            <Button colored>Github</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* proyecto 2 */}
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4XqRjTNPHy53OFwQOJzzkxCcmhixjwi8LdTGkW1GWZKWGcw_g) center / cover'}}>
                        Synthetic Population para la ciudad de Antofagasta
                        </CardTitle>
                        <CardText>
                            Se creó una población sintética para la ciudad de antofagasta, considerando las estadisticas del INE 
                            y utlizando modelamientos de GIS.
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/ggalvezb/Synthetic-Population-for-Antofagasta"rel="noopener noreferrer" target="_blank">
                            <Button colored>Github</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* proyecto 3 */}
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/2/2b/Markovkate_01.svg) center / cover'}}>
                        Simulacion de procesos Markov Meco
                        </CardTitle>
                        <CardText>
                            En este proyecto se simula un proceso de tipo Markov
                            que presenta una Mezcla de Erlangs de orden común.
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/ggalvezb/Markov_MECO/blob/master/Markov_Meco.ipynb"rel="noopener noreferrer" target="_blank">
                            <Button colored>Github</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    </div>
            )
        }

        /* OPTIMIZACION*/
        else if(this.state.activateTab===1){
            return(
                <div className="projects-grid">
                    {/* proyecto 1 */}
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px',background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRH66ckWFHqK0PH-5rJI1R8wCSm_5sO1V-JpEELncdRR5UaH8zV) center / cover'}}>
                        Asignacion drones
                        </CardTitle>
                        <CardText>
                            Optimización de asignacion de drones utilizando GIS y clustering.
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/ggalvezb/heuristica_drones"rel="noopener noreferrer" target="_blank">
                            <Button colored>Github</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* proyecto 2 */}
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px',background: 'url(https://www.artelys.com/wp-content/uploads/2018/11/formation4.jpg) center / cover'}}>
                        Dijkstra para evacuacion Antofagasta
                        </CardTitle>
                        <CardText>
                            Se utilizó el algoritmo de dijkstra junto a tecnicas de GIS para obtener la mejor ruta
                            de evacuación de cada familia en Atofagasta.
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/ggalvezb/Dijkstra-evacuacion-antofagasta-2"rel="noopener noreferrer" target="_blank">
                            <Button colored>Github</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* proyecto 3 */}
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px',background: 'url(https://cfikar.files.wordpress.com/2016/12/figure_vrpsolver.png?w=950) center / cover'}}>
                        Metaheuristica para un CVRPTW
                        </CardTitle>
                        <CardText>
                        Se presenta un algoritmo de tipo iterativo el cual hace busqueda local sobre vecindarios 
                        de forma descendiente para el problema del vrp capacitado con ventanas de tiempo.
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/ggalvezb/Iterated-Variable-Neighborhood-Descent-for-CVRPTW"rel="noopener noreferrer" target="_blank">
                            <Button colored>Github</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* proyecto 3 */}
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px',background: 'url(https://cfikar.files.wordpress.com/2016/12/figure_vrpsolver.png?w=950) center / cover'}}>
                        Metaheuristica para un CVRPTW
                        </CardTitle>
                        <CardText>
                        Se presenta un algoritmo de tipo iterativo el cual hace busqueda local sobre vecindarios 
                        de forma descendiente para el problema del vrp capacitado con ventanas de tiempo.
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/ggalvezb/Iterated-Variable-Neighborhood-Descent-for-CVRPTW"rel="noopener noreferrer" target="_blank">
                            <Button colored>Github</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                </div>
            )
        }

        /* MACHINE LEARNING*/
        else if(this.state.activateTab===2){
            return(
                <div className="projects-grid">
                    {/* proyecto 1 */}
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px',background: 'url(https://www.lokad.com/public/Upload//Technology/ProbabilisticForecasting/probabilistic-forecasting-graph.png) center / cover'}}>
                        Prediccion de demanda
                        </CardTitle>
                        <CardText>
                            Aplicación de método SARIMA para la prediccion de demanda anual, para diferentes productos
                            y diferentes sucursales.
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/ggalvezb/SARIMA-for-predict-demand"rel="noopener noreferrer" target="_blank">
                            <Button colored>Github</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* proyecto 2 */}
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px',background: 'url(https://i3.visitchile.com/img/GalleryContent/4296/slider/Concepcion.jpg) center / cover'}}>
                        Factores de riesgo en Región del Bíobio
                        </CardTitle>
                        <CardText>
                            Se identificaron las principales zonas de riesgo en la región utilizando clustering,
                            información del INE y se creó un modelo de optimizacion para efrentar emergencias.
                        </CardText>
                        <CardActions border>
                            <a href="https://github.com/ggalvezb/Factores-de-Riesgo-Emergencia-Natural-Region-del-Bio-Bio"rel="noopener noreferrer" target="_blank">
                            <Button colored>Github</Button>
                            </a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                </div>
            )
        }
    }



    render(){
        return(
            <div>
                <Tabs activateTab={this.state.activateTab} onChange={(tabId)=>this.setState({activateTab: tabId })}ripple>
                    <Tab>Simulación</Tab>
                    <Tab>Optimización</Tab>
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