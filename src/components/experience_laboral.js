import React,{Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Experience extends Component{
    render(){
        return(
            <Grid>
                {/* Lado izquierdo */}
                <Cell col={4}>
                    <p>{this.props.Years}</p>
                </Cell>
                {/* Lado derecho */}
                <Cell col={8}>
                    <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
                    <h5 style={{marginTop:'0px'}}>{this.props.jobTitle}</h5>
                    <p>{this.props.jobDescription1}</p>
                    <p>{this.props.jobDescription2}</p>
                    <p>{this.props.jobDescription3}</p>
                    <p>{this.props.jobDescription4}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Experience;