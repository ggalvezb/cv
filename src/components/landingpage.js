import React, {Componen, Component} from 'react';
import { Grid,Cell } from 'react-mdl';
import { Parallax, Background } from 'react-parallax';

const image1='https://cdn.pixabay.com/photo/2016/11/29/09/16/architecture-1868667_1280.jpg'

class Landingpage extends Component{
    render(){
        return(
            <div style={{width:'100%',margin:'auto'}}>
            
                <div>
            <Parallax blur={0}
            bgImage={image1}
            bgImageAlt="the cat"
            strength={500}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img
                        src={require('./Imagen_CV.png')}
                        alt="avatar"
                        className="avatar-img"/>

                        <div className="banner-text">
                            <h1>Ingeniero Civil Industrial</h1>
                        <hr/>
                        <p>Hice este sitio cómo forma de CV un póco más cercano, donde puedan ver mis proyectos
                            favoritos y puedan conocer más sobre las áreas en las que me desarrollo
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
                </Parallax>
                </div>

                {/* <div>
                    <Parallax strength={0} bgImage={'https://cdn.pixabay.com/photo/2016/03/26/13/09/notebook-1280538_1280.jpg'}>
                    <Grid className='grid_2'>
                    <Cell col={12}>
                        <h1>sajiajfasid</h1>
                    </Cell>
                    </Grid>
                    </Parallax>
                </div> */}
                
           
{/* 
            <div>
            <Parallax
            blur={0}
            bgImage={'https://cdn.pixabay.com/photo/2016/11/29/09/16/architecture-1868667_1280.jpg'}
            bgImageAlt="the cat"
            strength={500}
            >
            Put some text content here - even an empty div with fixed dimensions to have a height
            for the parallax.
            <div style={{ height: '200px' }} />

            </Parallax>
            </div>
 */}

            </div>
        )
    }
}
export default Landingpage;