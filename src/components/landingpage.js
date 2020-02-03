import React, {Componen, Component} from 'react';
import { Grid,Cell } from 'react-mdl';

class Landingpage extends Component{
    render(){
        return(
            <div style={{width:'100%',margin:'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img
                        src={require('./Imagen_CV.png')}
                        alt="avatar"
                        className="avatar-img"
                        
                        />

                        <div className="banner-text">
                            <h1>Ingeniero Civil Industrial</h1>
            
                        <hr/>

                        <p>Hice este sitio cómo forma de CV un póco más cercano, donde puedan ver mis proyectos
                            favoritos y puedan conocer más sobre las áreas en las que me desarrollo.
                        </p>

                        <div className="social-links">

                            {/* Linkedin*/}
                            <a href="https://www.linkedin.com/in/gonzalo-galvez-411975115/"rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                            </a>
                            {/* Github*/}
                            <a href="https://github.com/ggalvezb"rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square"  aria-hidden="true"/>
                            </a>

                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Landingpage;