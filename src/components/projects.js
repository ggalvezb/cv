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
                    {/* Grid izquierda */}
                    <Grid>
                        <Cell col={5}>
                            {/* proyecto simulacion antofa */}
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

                            {/* proyecto markov */}
                            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                                <CardTitle style={{color: 'black', height: '176px', background:'url(https://gregorygundersen.com/image/markov/weather.png) center / cover'}}>
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
                        </Cell>
                    </Grid>

                    {/* Grid centro */}
                    <Grid>
                        <Cell col={5}>
                            {/* proyecto poblacion sintetica */}
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
                        </Cell>
                    </Grid>

                    {/* Grid derecha */}
                    <Grid>
                        <Cell col={5}>
                            {/* proyecto Decision Markov */}
                            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                                <CardTitle style={{color: 'white', height: '176px',background: 'url(https://cdn.pixabay.com/photo/2017/02/22/17/02/beach-2089936_1280.jpg) center / cover'}}>
                                Predictor de condiciones de Surf
                                </CardTitle>
                                <CardText>
                                    Se utilizan cadenas de markov y tecnicas de Q learning para determinar el estado del mar cada dos horas
                                    en la zona de Pichilemu.
                                </CardText>
                                <CardActions border>
                                    <a href="https://github.com/ggalvezb/Proceso-de-Decision-de-Markov-con-Q-Learning"rel="noopener noreferrer" target="_blank">
                                    <Button colored>Github</Button>
                                    </a>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>

                        </Cell>
                    </Grid>

                    </div>
            )
        }

        /* OPTIMIZACION*/
        else if(this.state.activateTab===1){
            return(
                <div className="projects-grid">
                    {/* Grid izquierda */}
                    <Grid>
                        <Cell col={5}>
                            {/* proyecto drones */}
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
                   
                            {/* proyecto  maquinas paralelas*/}
                            
                            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                                <CardTitle style={{color: 'white', height: '176px',background: 'url(https://cdn.pixabay.com/photo/2018/03/10/09/45/businessman-3213659_1280.jpg) center / cover'}}>
                                ILSVND para maquinas en paralelo
                                </CardTitle>
                                <CardText>
                                Acá se presenta una metaheuristica de Iterated Local Serach con Variable Neighborhood Descent e 
                                instancias para su prueba. El codigo fue programado en base al paper Luis Fanjul-Peyro, Rubén Ruiz(2009)
                                </CardText>
                                <CardActions border>
                                    <a href="https://github.com/ggalvezb/Maquinas_Paralelas_ILSconVND"rel="noopener noreferrer" target="_blank">
                                    <Button colored>Github</Button>
                                    </a>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>

                            {/* proyecto TSP Localsearch */}
                            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                                <CardTitle style={{color: 'black', height: '176px',background: 'url(https://cdn.pixabay.com/photo/2014/09/22/01/10/map-455769_1280.jpg) center / cover'}}>
                                Metaheuristica para TSP
                                </CardTitle>
                                <CardText>
                                Se presentan dos formas de resolver el TSP. Utilizando un algoritmo Greedy y una metaheuristica de Localsearch.
                                </CardText>
                                <CardActions border>
                                    <a href="https://github.com/ggalvezb/TSP_Greedy_y_LocalSearch"rel="noopener noreferrer" target="_blank">
                                    <Button colored>Github</Button>
                                    </a>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>

                        </Cell>
                    </Grid>

                    {/* Grid centro */}
                    <Grid>
                        <Cell col={5}>

                            {/* proyecto heuristica MPMDSDVRP */}
                            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                                <CardTitle style={{color: 'white', height: '176px',background: 'url(https://cdn.pixabay.com/photo/2014/09/01/14/39/forest-fire-432870_1280.jpg) center / cover'}}>
                                Heuristica para MPMDSDVRP
                                </CardTitle>
                                <CardText>
                                Se muestra una heuristica para un VRP con multiples depósitos, múltiples productos y split delivery.
                                Enfocado en afrontar incendios forestales.
                                </CardText>
                                <CardActions border>
                                    <a href="https://github.com/ggalvezb/Heuristica-MPMDSDVRP"rel="noopener noreferrer" target="_blank">
                                    <Button colored>Github</Button>
                                    </a>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>

                            {/* proyecto OP Greedy */}                   
                            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                                <CardTitle style={{color: 'white', height: '176px',background: 'url(https://cdn.pixabay.com/photo/2016/11/18/22/31/architecture-1837176_1280.jpg) center / cover'}}>
                                Orienteering Problem Greedy
                                </CardTitle>
                                <CardText>
                                   Se utiliza un algoritmo Greedy para resolver el problema de Orienteering.
                                </CardText>
                                <CardActions border>
                                    <a href="https://github.com/ggalvezb/OrienteeringProblem_greedy"rel="noopener noreferrer" target="_blank">
                                    <Button colored>Github</Button>
                                    </a>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>

                            {/* pryecto subgradiente asignacion */}
                            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                                <CardTitle style={{color: 'white', height: '176px',background: 'url(https://cssintl.com/wp-content/uploads/2017/07/dunnage.jpg) center / cover'}}>
                                Metodo de subgradiente para asignacion
                                </CardTitle>
                                <CardText>
                                Se utilizó el método de subgradiente para decidir la asignacion de productos a máquinas
                                en una línea de producción.
                                </CardText>
                                <CardActions border>
                                    <a href="https://github.com/ggalvezb/metodosubgradiente/blob/master/metodo_subgradiente_asignacion.py"rel="noopener noreferrer" target="_blank">
                                    <Button colored>Github</Button>
                                    </a>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>

                        </Cell>
                    </Grid>

                    {/* Grid derecho */}
                    <Grid>
                        <Cell col={5}>

                            {/* proyecto dijkstra antofa */}                   
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

                            {/* proyecto metaheuristica cvrptw */}
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


                            

                        </Cell>
                    </Grid>

                </div>
            )
        }

        /* MACHINE LEARNING*/
        else if(this.state.activateTab===2){
            return(
                <div className="projects-grid">
                    {/* Grid izquierdo */}
                    <Grid>
                        <Cell col={5}>
                            {/* proyecto SARIMA */}
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
                        </Cell>
                    </Grid>

                    {/* Grid centro */}
                    <Grid>
                        <Cell col={5}>
                            
                    {/* proyecto Factores riesgo */}
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

                        </Cell>
                    </Grid>

                    {/* Grid derecho */}
                    <Grid>
                        <Cell col={5}>
                            {/* proyecto 5 tipos cluster */}
                            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                                <CardTitle style={{color: 'white', height: '176px',background: 'url(https://miro.medium.com/max/1140/1*diHxfl62piQUE_SwBcw8hg.jpeg) center / cover'}}>
                                Comparacion 5 tipos de clustering
                                </CardTitle>
                                <CardText>
                                Se presentan 5 metodos de clusterizacion: -kmeans -minibatchkmeans -aglomerativo -dbscan -meanshift
                                Todos unificados en con una sola función para ser importada en otros codigos y probados con datos de posiciones neuronales.
                                </CardText>
                                <CardActions border>
                                    <a href="https://github.com/ggalvezb/5_tipos_clusters/blob/master/Tarea_Clusters.ipynb"rel="noopener noreferrer" target="_blank">
                                    <Button colored>Github</Button>
                                    </a>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                        </Cell>
                    </Grid>
                </div>)}

        /* BIG DATA*/
        else if(this.state.activateTab===3){
            return(
                <div className="projects-grid">
                    {/* Grid izquierdo */}
                    <Grid>
                        <Cell col={5}>

                        </Cell>
                    </Grid>

                    {/* Grid centro */}
                    <Grid>
                        <Cell col={5}>
                            
                    {/* proyecto Count Streaming */}
                        <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                            <CardTitle style={{color: 'white', height: '176px',background: 'url(https://bbvaopen4u.com/sites/default/files/styles/big-image/public/img/new/imagen_1_4.png?itok=-B2bA4vg) center / cover'}}>
                            3 contadores en Streaming
                            </CardTitle>
                            <CardText>
                                Se muestran 3 tecnicas de contadores en Streaming: CountSketch, CountMinCU, CountMinSketch
                                los cuales son usados para analizar un grafo de conexión web europeo.
                            </CardText>
                            <CardActions border>
                                <a href="https://github.com/ggalvezb/CountSketch-CountMinCU-CountMinSketch"rel="noopener noreferrer" target="_blank">
                                <Button colored>Github</Button>
                                </a>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        </Cell>
                    </Grid>

                    {/* Grid derecho */}
                    <Grid>
                        <Cell col={5}>

                        </Cell>
                    </Grid>
                </div>
            )
        }

        /* PAGINAS WEB*/
        else if(this.state.activateTab===4){
            return(
                <div className="projects-grid">
                    {/* Grid izquierdo */}
                    <Grid>
                        <Cell col={5}>
                        {/* proyecto Esta WEB */}
                        <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                            <CardTitle style={{color: 'black', height: '176px',background: 'url(https://cdn.pixabay.com/photo/2016/01/19/17/53/writing-1149962_1280.jpg) center / cover'}}>
                            Página CV
                            </CardTitle>
                            <CardText>
                               Esta misma página web fue desarrollada por mi 100% en react.
                            </CardText>
                            <CardActions border>
                                <a href="https://ggalvezb.github.io/cv"rel="noopener noreferrer" target="_blank">
                                <Button colored>Web</Button>
                                </a>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                        </Cell>
                    </Grid>

                    {/* Grid centro */}
                    <Grid>
                        <Cell col={5}>
                            
                    {/* proyecto Informacion Transparente */}
                        <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                            <CardTitle style={{color: 'white', height: '176px',background: 'url(https://es.justexw.com/wp-content/uploads/sites/2/funciones-de-excel-para-contabilidad.jpg) center / cover'}}>
                            Información Transparente
                            </CardTitle>
                            <CardText>
                                Dashboard realizado en Power BI el cual presenta los principales gastos
                                municipales en cada comuna de Chile.(En construcción)
                            </CardText>
                            <CardActions border>
                                <a href="https://informaciontransparente.com"rel="noopener noreferrer" target="_blank">
                                <Button colored>Web</Button>
                                </a>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>


                        </Cell>
                    </Grid>

                    {/* Grid derecho */}
                    <Grid>
                        <Cell col={5}>

                        </Cell>
                    </Grid>
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
                    <Tab>Big Data</Tab>
                    <Tab>Paginas Web</Tab>
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