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
                        <div style={{textAlign:'center'}}>
                            <img
                                src="https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14046.jpg"
                                alt="avatar"
                                style={{height:"200px"}}
                            />
                        </div>

                        <h2 style={{paddingTop:'2em'}}>Gonzalo Gálvez Bobadilla</h2>
                        <h4 style={{color:'grey'}}>Ingeniero Civil Industrial</h4>
                        <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
                        <p>bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p>
                        <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
                        <h5>Dirección</h5>
                        <p>Las violestas 3238, Concepción</p>
                        <h5>Teléfono</h5>
                        <p>(56)9 5798 7697</p>
                        <h5>Email</h5>
                        <p>gonzalo@informaciontransparente.com</p>
                        <p>gonzalo@udec.cl</p>
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
                            schoolDescription="Ingeniera Civil Industrial"
                        />
                        <Education
                            startYear={2018}
                            endYear={2020}
                            schoolName="Universidad de Concepcion"
                            schoolDescription="Magister en Ingeniería Industrial"
                        />

                        <hr style={{borderTop:'3px solid #e22947'}}/>

                        <h2>Experiencia Laboral</h2>
                        <Experience
                            Years="Octubre 2019 - Diciembre 2019"
                            jobName="Unidad de data science UdeC"
                            jobTitle="Ingeniero de Proyecto"
                            jobDescription="bla bla bla bla bla bla "
                        />

                        <hr style={{borderTop:'3px solid #e22947'}}/>

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


                    </Cell>

                </Grid>
            </div>
        )
    }
}
export default Aboutme;