import React,{Component} from 'react';
import {Tabs,Tab, Grid,Cell,Card,CardText,CardTitle,CardActions,Button,CardMenu,IconButton} from 'react-mdl';
import Project from './tarjeta_proyecto';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state={activeTab:0};
    }

    toggleCategories(){

        /* SIMULACION*/
        if(this.state.activateTab===0){
            return(
                <div style={{width: '90%', margin: 'auto'}}>
                    <Grid>
                        <Cell col={12}>
                            <h2 className='titulos_area_proyectos'>Simulación</h2>
                        </Cell>


                        <Project
                            titulo='Evacuador Falla San Ramon'
                            image_card='data:image/jpeg;base64,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'
                            descripcion='Este es un simulador de evacuación para las personas aledañas a la Falla de San Ramón en Santiago Chile.'
                            link='https://colab.research.google.com/drive/1byRqAZ-WJx4h3rtpQRLkMfo_xKJbd1u0?usp=sharing'
                            nombre_boton='Google Colab'
                        />   

                        <Cell col={4}>
                        {/* proyecto simulacion antofa */}
                        <Card shadow={0} style={{width: '290px', height: '320px', margin: 'auto'}}>
                                <CardTitle style={{color: 'white', height: '176px', background:'url(https://www.maritimoportuario.cl/mp/wp-content/uploads/2015/09/tsunami-evacuacion.jpg) center / cover'}}>
                                <p className='Cards_title_1'>Simulación Evacuación Antofagasta</p>
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
                        </Cell>

                        <Cell col={4}>
                            {/* proyecto poblacion sintetica */}
                            <Card shadow={0} style={{width: '290px', height: '320px', margin: 'auto'}}>
                                <CardTitle style={{color: 'white', height: '176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4XqRjTNPHy53OFwQOJzzkxCcmhixjwi8LdTGkW1GWZKWGcw_g) center / cover'}}>
                                <p className='Cards_title_2'>Synthetic Population para la ciudad de Antofagasta</p>
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

                        <Grid>

                        <Cell col={4}>
                            {/* proyecto SURF */}
                            <Card shadow={0} style={{width: '290px', height: '320px', margin: 'auto'}}>
                                <CardTitle style={{color: 'white', height: '176px',background: 'url(https://cdn.pixabay.com/photo/2017/02/22/17/02/beach-2089936_1280.jpg) center / cover'}}>
                                <p className='Cards_title_1'>Predictor de condiciones de Surf</p>
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
                    
                        <Cell col={4}>
                            {/* proyecto markov */}
                            <Card shadow={0} style={{width: '290px', height: '320px', margin: 'auto'}}>
                                <CardTitle style={{color: 'white', height: '176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Markovkate_01.svg/1200px-Markovkate_01.svg.png) center / cover'}}>
                                <p className='Cards_title_2'>Simulacion de procesos Markov Meco</p>
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
                </div>
            )
        }

        /* OPTIMIZACION*/
        else if(this.state.activateTab===1){
            return(
                <div style={{width: '90%', margin: 'auto'}}>
                    <Grid>
                        <Cell col={12}>
                            <h2 className='titulos_area_proyectos'>Optimización</h2>
                        </Cell>
                        <Cell col={4}>
                            {/* proyecto drones */}
                            <Card shadow={0} style={{width: '290px', height: '320px', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '176px',background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRH66ckWFHqK0PH-5rJI1R8wCSm_5sO1V-JpEELncdRR5UaH8zV) center / cover'}}>
                                <p className='Cards_title_1'>Asignacion drones</p>
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
                        </Cell>

                        <Cell col={4}>
                            {/* proyecto heuristica MPMDSDVRP */}
                            <Card shadow={0} style={{width: '290px', height: '320px', margin: 'auto'}}>
                                <CardTitle style={{color: 'white', height: '176px',background: 'url(https://cdn.pixabay.com/photo/2014/09/01/14/39/forest-fire-432870_1280.jpg) center / cover'}}>
                                <p className='Cards_title_1'>Heuristica para MPMDSDVRP</p>
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
                        </Cell>
                        <Cell col={4}>
                            {/* proyecto dijkstra antofa */}                   
                            <Card shadow={0} style={{width: '290px', height: '320px', margin: 'auto'}}>
                                <CardTitle style={{color: 'white', height: '176px',background: 'url(https://www.artelys.com/wp-content/uploads/2018/11/formation4.jpg) center / cover'}}>
                                <p className='Cards_title_1'>Dijkstra para evacuacion Antofagasta</p>
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
                        </Cell>
                    </Grid>

                    <Grid>
                        <Cell>
                             {/* proyecto  maquinas paralelas*/}
                            
                             <Card shadow={0} style={{width: '290px', height: '320px', margin: 'auto'}}>
                                <CardTitle style={{color: 'white', height: '176px',background: 'url(https://cdn.pixabay.com/photo/2018/03/10/09/45/businessman-3213659_1280.jpg) center / cover'}}>
                                <p className='Cards_title_1'>ILSVND para maquinas en paralelo</p>
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
                           
                        </Cell>
                        <Cell col={4}>
                            {/* proyecto OP Greedy */}                   
                            <Card shadow={0} style={{width: '290px', height: '320px', margin: 'auto'}}>
                                <CardTitle style={{color: 'white', height: '176px',background: 'url(https://cdn.pixabay.com/photo/2016/11/18/22/31/architecture-1837176_1280.jpg) center / cover'}}>
                                <p className='Cards_title_1'>Orienteering Problem Greedy</p>
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
                        </Cell>
                        <Cell col={4}>
                            {/* proyecto metaheuristica cvrptw */}
                            <Card shadow={0} style={{width: '290px', height: '320px', margin: 'auto'}}>
                                <CardTitle style={{color: 'white', height: '176px',background: 'url(https://cfikar.files.wordpress.com/2016/12/figure_vrpsolver.png?w=950) center / cover'}}>
                                <p className='Cards_title_2'>Metaheuristica para un CVRPTW</p>
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

                    <Grid>
                        <Cell col={4}>
                            {/* proyecto TSP Localsearch */}
                            <Card shadow={0} style={{width: '290px', height: '320px', margin: 'auto'}}>
                                <CardTitle style={{color: 'white', height: '176px',background: 'url(https://cdn.pixabay.com/photo/2014/09/22/01/10/map-455769_1280.jpg) center / cover'}}>
                                <p className='Cards_title_2'>Metaheuristica para TSP</p>
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
                        <Cell col={4}>
                            {/* pryecto subgradiente asignacion */}
                            <Card shadow={0} style={{width: '290px', height: '320px', margin: 'auto'}}>
                                <CardTitle style={{color: 'white', height: '176px',background: 'url(https://cssintl.com/wp-content/uploads/2017/07/dunnage.jpg) center / cover'}}>
                                <p className='Cards_title_1'>Metodo de subgradiente para asignacion</p>
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
                </div>
            )
        }

        /* MACHINE LEARNING*/
        else if(this.state.activateTab===2){
            return(
                <div style={{width: '90%', margin: 'auto'}}>
                 {/* Primera Fila */}
                    <Grid>
                        <Cell col={12}>
                            <h2 className='titulos_area_proyectos'>Machine Learning</h2>
                        </Cell>
                        <Project
                            titulo='Clasificación de Texto para Construcción'
                            image_card='https://www.empresasnewen.cl/wp-content/uploads/2021/04/especialistas-construccion-industrial-2.jpg'
                            descripcion='Uso de algoritmo de "Natural Language Understanding" para la clasificación de texto, enfocado en observaciones de obras de construcción'
                            link='https://colab.research.google.com/drive/10ThpArcOOOt-4KUz5At_Zkin9OF1f0PH?usp=sharing'
                            nombre_boton='Google Colab'
                        />                       

                        <Project
                            titulo='Prediccion de Precios Acciones'
                            image_card='https://www.entornointeligente.com/wp-content/uploads/2021/05/wall_street_apuesta_masiva_de_los_inversores_por_las_tecnologicas_impulsa_al_sap500.jpg'
                            descripcion='Algoritmo de "Long Short Term Memory" usado para la predicción diaria de precios de acciones de empresas.'
                            link='https://colab.research.google.com/drive/1Bz63tzzAv9gCbVnLpIdeokH2RgEUwCE_?usp=sharing'
                            nombre_boton='Google Colab'
                        />     
                        <Project
                            titulo='Prediccion de permanencia clientes bancarios'
                            image_card='https://vignette.wikia.nocookie.net/himym/images/f/fe/Gnb_establishing.png/revision/latest?cb=20110105223112'
                            descripcion='Creación de una Red Neuronal con el Metodo de Gradiente para determinar si un cliente permanecerá en el banco o no.'
                            link='https://github.com/ggalvezb/Predictor_clientes_banco/blob/master/predictor_clientes_banco.ipynb'
                            nombre_boton='Github'
                        />    


                    </Grid>
   
                    {/* Segunda Fila */}
                    <Grid>

                        <Project
                            titulo='Prediccion de demanda'
                            image_card='https://www.lokad.com/public/Upload//Technology/ProbabilisticForecasting/probabilistic-forecasting-graph.png'
                            descripcion='Aplicación de método SARIMA para la prediccion de demanda anual, para diferentes productos y diferentes sucursales.'
                            link='https://github.com/ggalvezb/SARIMA-for-predict-demand'
                            nombre_boton='Github'
                        />     

                        <Project
                            titulo='Prediccion de Estafas con Tarjeta de Credito'
                            image_card='https://cdn.pixabay.com/photo/2016/08/14/16/57/internet-1593384_1280.jpg'
                            descripcion='Se utilizó una Red Neuronal para determinar que tipo de transacciones con tarjetas de crédito son una estafa.'
                            link='https://github.com/ggalvezb/Estafas_bancarias/blob/master/estafas_bancarias.ipynb'
                            nombre_boton='Github'
                        />

                        {/* proyecto 5 tipos cluster */}
                        <Cell col={4}>
                            <Card shadow={0} style={{width: '290px', height: '350px', margin: 'auto'}}>
                                <CardTitle style={{color: 'white', height: '176px',background: 'url(https://miro.medium.com/max/1140/1*diHxfl62piQUE_SwBcw8hg.jpeg) center / cover'}}>
                                <p className='Cards_title_1'>Comparacion 5 tipos de clustering </p>
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
                    
                    {/* tercera Fila */}
                    <Grid>


                        {/* proyecto analisis sentimiento twitter */}
                        <Cell col={4}>
                            <Card shadow={0} style={{width: '290px', height: '350px', margin: 'auto'}}>
                                <CardTitle style={{color: 'white', height: '176px',background: 'url(https://cdn.pixabay.com/photo/2015/01/02/20/14/smartphone-586944_1280.jpg) center/cover'}}>
                                <p className='Cards_title_1'>Análisis Tiempo Real Twitter </p>
                                </CardTitle>
                                <CardText>
                                Se muestra un análisis de sentimiento que realice en Twitter, donde se puede clasificar en Postivo, Negativo o Neutral
                                los Tweets de usuarios o inspeccionar en tiempo real todos los tweets realizados con palabras seleccionadas y mostrar las
                                palabras más usadas.
                                </CardText>
                                <CardActions border>
                                    <a href="https://github.com/ggalvezb/Twitter_Sentiment_Analysis"rel="noopener noreferrer" target="_blank">
                                    <Button colored>Github</Button>
                                    </a>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                        </Cell>
                        
                        {/* Procesamiento de lenguaje */}
                        <Cell col={4}>                          
                            <Card shadow={0} style={{width: '290px', height: '350px', margin: 'auto'}}>
                                <CardTitle style={{color: 'white', height: '176px',background: 'url(https://i1.wp.com/www.dignited.com/wp-content/uploads/2018/09/language-2.png?fit=640%2C331&ssl=1) center/cover'}}>
                                <p className='Cards_title_1'>Analisis de comentarios de restaurante</p>
                                </CardTitle>
                                <CardText>
                                Se utiliza Natural Language Processing para evaluar comentarios online y clasificarlos en positivos y negativos.                           
                                </CardText>
                                <CardActions border>
                                    <a href="https://github.com/ggalvezb/Procesamiento_de_lenguaje"rel="noopener noreferrer" target="_blank">
                                    <Button colored>Github</Button>
                                    </a>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                        </Cell>
                        {/* Canasta de compras */}
                        <Cell col={4}>                          
                            <Card shadow={0} style={{width: '290px', height: '350px', margin: 'auto'}}>
                                <CardTitle style={{color: 'white', height: '176px',background: 'url(https://live.mrf.io/statics/i/ps/www.ecestaticos.com/imagestatic/clipping/0e1/227/0e122742e65776401a28155f67ef5de2/los-seis-productos-que-es-mejor-no-comprar-en-un-supermercado-carne-envasada-pilas.jpg?mtime=1579565836) center/cover'}}>
                                <p className='Cards_title_1'>Asociación de productos</p>
                                </CardTitle>
                                <CardText>
                                En este proyecto se utiliza el algoritmo Apriori para generar una asociación de productos y potenciar la venta de estos.                   
                                </CardText>
                                <CardActions border>
                                    <a href="https://github.com/ggalvezb/Canasta_de_compras"rel="noopener noreferrer" target="_blank">
                                    <Button colored>Github</Button>
                                    </a>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                        </Cell>

                    </Grid>

                    {/* CUARTA Fila */}
                    <Grid>



                        {/* Procesamiento de lenguaje */}
                        <Cell col={4}>                          
                            <Card shadow={0} style={{width: '290px', height: '350px', margin: 'auto'}}>
                                <CardTitle style={{color: 'white', height: '176px',background: 'url(https://blog.mailrelay.com/wp-content/uploads/2018/08/problemas-de-marketing.png) center/cover'}}>
                                <p className='Cards_title_1'>Comparacion anuncios publicitarios</p>
                                </CardTitle>
                                <CardText>
                                Se utiliza reinforcement learning con el algoritmo UCB y Thompson Sampling para encontrar cual es el mejor anuncio publicitario para una campaña                        
                                </CardText>
                                <CardActions border>
                                    <a href="https://github.com/ggalvezb/Comparacion_anuncios_publicitarios"rel="noopener noreferrer" target="_blank">
                                    <Button colored>Github</Button>
                                    </a>
                                </CardActions>
                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                        </Cell>
                        
                        <Project
                            titulo='Factores de riesgo en Región del Bíobio'
                            image_card='https://i3.visitchile.com/img/GalleryContent/4296/slider/Concepcion.jpg'
                            descripcion='Se identificaron las principales zonas de riesgo en la región utilizando clustering, información del INE y se creó un modelo de optimizacion para efrentar emergencias.'
                            link='https://github.com/ggalvezb/Factores-de-Riesgo-Emergencia-Natural-Region-del-Bio-Bio'
                            nombre_boton='Github'
                        />

                        <Project
                            titulo='Curso Machine Learning A-Z Udemy'
                            image_card='https://img-a.udemycdn.com/course/750x422/950390_270f_3.jpg'
                            descripcion='Se abordaron los topicos de: Regression,Classification,Clustering, ARL, Reinforcement Learning, Natural Language Processing, Deep Learning, Dimensionality Reduction, Model Selection and Boosting '
                            link='https://www.udemy.com/course/machinelearning/'
                            nombre_boton='Web'
                        />


                    </Grid>
                    {/*QUINTA Fila VACIA */}
                    <Grid>

                    </Grid>

                 


                </div>)}

        /* BIG DATA*/
        else if(this.state.activateTab===3){
            return(
                <div style={{width: '90%', margin: 'auto'}}>
                    <Grid>
                        <Cell col={12}>
                            <h2 className='titulos_area_proyectos'>Big Data</h2>
                        </Cell>
                        <Cell col={12}>
                    {/* proyecto Count Streaming */}
                    <Card shadow={0} style={{width: '290px', height: '320px', margin: 'auto'}}>
                            <CardTitle style={{color: 'white', height: '176px',background: 'url(https://sbims.com/wp-content/uploads/2017/04/Association_Membership_Networking_Connections.jpg) center / cover'}}>
                            <p className='Cards_title_1'>3 contadores en Streaming</p>
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
                </div>
            )
        }

        /* PAGINAS WEB*/
        else if(this.state.activateTab===4){
            return(
                <div style={{width: '90%', margin: 'auto'}}>

                    {/* FILA UNO */}
                    <Grid>
                        <Cell col={12}>
                            <h2 className='titulos_area_proyectos'>Paginas Web</h2>
                        </Cell>

                    <Project
                            titulo='Brigada Bomberos Arauco'
                            image_card='data:image/jpeg;base64,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'
                            descripcion='Creación de página web para brigada de bomberos Arauco Oriente, desarrollada en Wordpress'
                            link='http://brigadaoriente.cl/'
                            nombre_boton='Web'
                        />

                    <Project
                            titulo='Página'
                            image_card='https://cdn.pixabay.com/photo/2016/01/19/17/53/writing-1149962_1280.jpg'
                            descripcion='Esta misma página web fue desarrollada por mi 100% en react.'
                            link='https://ggalvezb.github.io/cv'
                            nombre_boton='Web'
                        />                            
                        

                    <Cell col={4}>
                    {/* proyecto Informacion Transparente */}
                    <Card shadow={0} style={{width: '290px', height: '320px', margin: 'auto'}}>
                            <CardTitle style={{color: 'white', height: '176px',background: 'url(https://es.justexw.com/wp-content/uploads/sites/2/funciones-de-excel-para-contabilidad.jpg) center / cover'}}>
                            <p className='Cards_title_1'>Información Transparente</p>
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

                {/* FILA DOS */}
                <Grid>
                <Cell col={4}>
                    {/* proyecto web ap notas */}
                    <Card shadow={0} style={{width: '290px', height: '320px', margin: 'auto'}}>
                            <CardTitle style={{color: 'white', height: '176px',background: 'url(https://img-a.udemycdn.com/course/240x135/3236063_9fd3.jpg) center / cover'}}>
                            <p className='Cards_title_1'>Web App MERN Notas</p>
                            </CardTitle>
                            <CardText>
                                Aplicació web desarrollada con MERN (MongoDB,Express,React,Nodejs). Esta es una aplicacion
                                de notas web, que tiene usuarios y notas que se almacenan en una base de datos.
                            </CardText>
                            <CardActions border>
                                <a href="https://github.com/ggalvezb/MERN-project-notes-services"rel="noopener noreferrer" target="_blank">
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
    
        
    }



    render(){
        return(
            <div className='tabs_projects'>
                <Tabs  className='tab' activateTab={this.state.activateTab} onChange={(tabId)=>this.setState({activateTab: tabId })}ripple>
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


