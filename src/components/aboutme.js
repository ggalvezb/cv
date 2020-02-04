import React, {Componen, Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience_laboral';
import Skills from './skills.js';

class Aboutme extends Component{
    render(){
        return(
            <div>
                <Grid>
                    {/* Left Side*/}
                    <Cell col={4}>
                        {/* <div style={{textAlign:'center'}}>
                            <img
                                src="https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14046.jpg"
                                alt="avatar"
                                style={{height:"200px"}}
                            />
                        </div> */}

                        <h2 style={{paddingTop:'2em'}}>Gonzalo Gálvez Bobadilla</h2>
                        <h4 style={{color:'grey'}}>Ingeniero Civil Industrial</h4>
                        <hr style={{borderTop:'3px solid #11357A',width:'50%'}}/>
                        <p align="center">Ingeniero civil industrial UdeC con más de 6 años de experiencia laboral en el manejo de equipos de trabajo enfocado en la intervención social y
                            comunitaria. Actualmente realizando tesis de
                            magister con temáticas de simulación, logística, programación y emergencias naturales.</p>
                        <hr style={{borderTop:'3px solid #11357A',width:'50%'}}/>
                        <h5>Dirección</h5>
                        <p>Las violestas 3238, Concepción</p>
                        <h5>Teléfono</h5>
                        <p>(56)9 5798 7697</p>
                        <h5>Email</h5>
                        <p>gonzalo@informaciontransparente.com</p>
                        <p>ggalvez.bobadilla@gmail.com</p>
                        <h5>Web</h5>
                        <p>ggalvezb.github.io/my-app</p>
                    </Cell>

                    {/* Right Side*/}
                    <Cell className='aboutme-right-col' col={8}>
                        <h2>Educación</h2>
                        <Education
                            startYear={2013}
                            endYear={2018}
                            schoolName="Universidad de Concepcion"
                            schoolDescription="Ingeniería Civil Industrial"
                        />
                        <Education
                            startYear={2018}
                            endYear={2020}
                            schoolName="Universidad de Concepcion"
                            schoolDescription="Magister en Ingeniería Industrial"
                        />

                        <hr style={{borderTop:'3px solid #11357A'}}/>

                        <h2>Experiencia Laboral</h2>
                        <Experience
                            Years="Noviembre 2019 - Actualmente"
                            jobName="Información Transparente"
                            jobTitle="Co-fundador"
                            jobDescription1="- Emprendimiento basado en reportabilidad de datos financieros estatales a través de una pagina web con herramientas de Power BI."
                            jobDescription2="- Reuniones con el Consejo de la Tranparencia para formar una linea de trabajo colaborativo."

                        />
                        <Experience
                            Years="Octubre 2019 - Diciembre 2019"
                            jobName="Unidad de data science UdeC"
                            jobTitle="Ingeniero de Proyecto"
                            jobDescription1="- Creación de modelo matemático óptimo, software de uso y visualización en Power BI para área de abastecimiento en Celulosa Arauco S.A - Complejo Nueva Aldea."

                        />
                        <Experience
                            Years="Enero 2018 - Marzo 2018"
                            jobName="CELULOSA ARAUCO S.A - COMPLEJO HORCONES"
                            jobTitle="Practica Profesional"
                            jobDescription1="- Creación de plan de muestreo área Seco-Cepillado para disminuir rechazo de productos de un 12% a un 5% aproximadamente, aplicando técnicas de control de calidad y macros de Excel."
                        />

                        <Experience
                            Years="Agosto 2016 - Julio 2018"
                            jobName="TECHO-CHILE"
                            jobTitle="Coordinador Zonal de Talcahuano"
                            jobDescription1="- Inserción y seguimiento de los 18 Coordinadores Generales de Campamento."
                            jobDescription2="- Diagnóstico territorial de los 9 campamentos en los que se está realizando intervención."
                            jobDescription3="- Entrevista en medios de prensa."
                            jobDescription4="- Mesa de trabajo Zonal junto a representantes del municipio."
                        />

                        <Experience
                            Years="Mayo 2015 - Enero 2017"
                            jobName="TECHO-CHILE"
                            jobTitle="Inserción y Gestión de Voluntarios nuevos, Provincia de Concepción."
                            jobDescription1="- Protocolo de derivación de voluntarios."
                            jobDescription2="- Creación de plataforma con registro único de la situación de cada campamento."
                            jobDescription3="- La aplicación del protocolo ha logrado disminuir el tiempo de inserción en un 75%."
                        />

                        <Experience
                            Years="Septiembre 2014 - Agosto 2016"
                            jobName="TECHO-CHILE"
                            jobTitle="Coordinador General del Campamento Las Algas, Talcahuano."
                            jobDescription1="- Liderazgo de equipo formado por 15 voluntarios."
                            jobDescription2="- Obtención de 47 Subsidios para el comité de vivienda."
                            jobDescription3="- 3 Proyectos de construcción de infraestructura comunitaria."
                            jobDescription4="- Ejecución de planes de Educación, Trabajo, Jurídica y Medio Ambiente."
                        />
                        <hr style={{borderTop:'3px solid #11357A'}}/>

                        <h2>Experiencia Académica</h2>
                        <Experience
                            Years="Mayo 2019 - Actualmente"
                            jobName="Investigación"
                            jobDescription1="- Trabajando en una publicación junto a profesor de la Universidad de Concepción, enfocada en el área de simulación y asignación óptima de una población sintética para la evacuación post tsunami en la ciudad de Antofagasta Chile."
                        />

                        <Experience
                            Years="Enero 2019"
                            jobName="Poster en worshop internacional de metaheuristica híbrida."
                            jobDescription1="- Diseño y programación de metahuristica híbrida para el problema del leñador propuesto por Optil.io's."
                        />

                        
                        <Experience
                            Years="Enero 2018 - Diciembre 2018"
                            jobName="Ayudantías"
                            jobDescription1="- Ayudante en la asignatura electiva de Ruteo de Vehículos para alumnos de 5to año de Ingeniería Civil Industrial Udec."
                            jobDescription2="- Ayudante en la asignatura obligatoria de Logística para alumnos de 5to año de Ingeniería Civil Industrial Udec."
                        />

                        <Experience
                            Years="Agosto 2017 - Agosto 2018"
                            jobName="Investigación"
                            jobDescription1="- Trabajo de investigación junto a profesor de la Universida de Concepción, enfocado en la creación de un modelo de optimización
                                                para resolver el problema de ruteo de vehículo con múltiples productos, múltiples depósitos y reparto dividido. Siendo la temática
                                                principal la respuesta rápida frente a incendios forestales."
                        />
                        
                        <hr style={{borderTop:'3px solid #11357A'}}/>

                        <h2>Habilidades</h2>
                        <Skills
                            skill="Python"
                            progress={90}
                        />
                        <Skills
                            skill="Power Bi"
                            progress={70}
                        />
                        <Skills
                            skill="Excel"
                            progress={80}
                        />
                        <Skills
                            skill="Cplex"
                            progress={70}
                        />
                        <Skills
                            skill="React"
                            progress={50}
                        />
                        <Skills
                            skill="GIS"
                            progress={80}
                        />


                    </Cell>

                </Grid>
            </div>
        )
    }
}
export default Aboutme;