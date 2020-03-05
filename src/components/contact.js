import React, {Componen, Component} from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl'

class Contact extends Component{
    render(){
        return(
            <div className='conctac-body'>
                <Grid className='contact-grid'>
                    {/* Lado izquierdo */}
                    <Cell col={5}>
                        <h2>Gonzalo Gálvez Bobadilla</h2>
                        <img src='https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png'
                        style={{height: '250px'}}
                        />
                        <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}>
                        </p>
                    </Cell>
                    {/* Lado derecho*/}
                    <Cell col={7}>
                        <h2>Contáctame</h2>
                        <hr/>
                        <div className='contact-list'>
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px',fontFamily: 'Anton'}}>
                                        <i className='fa fa-phone-square' aria-hidden='true'/>
                                        (+56) 957-987-697
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'20px',fontFamily: 'Anton'}}>
                                        <i className='fa fa-envelope' aria-hidden='true'/>
                                        gonzalo@informaciontransparente.com
                                    </ListItemContent>
                                </ListItem>


                                <ListItem>
                                    <ListItemContent style={{fontSize:'20px',fontFamily: 'Anton'}}>
                                        <i className='fa fa-envelope' aria-hidden='true'/>
                                        ggalvez.bobadilla@gmail.com
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Contact;