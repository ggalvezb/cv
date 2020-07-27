import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl'


class Reporte_twitter extends Component{
    render(){
        return(
           <div>
               <Grid>
                   <Cell col={12} align='middle'>
                   <div class="container">
                   <iframe class="responsive-iframe" src="https://app.powerbi.com/view?r=eyJrIjoiZWU4NTQ2NjQtNTNkMC00NzA5LWI2NzAtZWQ5N2YxYTVlZjMwIiwidCI6IjdjZjBmMGRjLTZjNzctNDBhZi1hZmNlLWQwZWY2ZjU2YzJlYiJ9" frameborder="0" allowFullScreen="true"></iframe>
                   </div>
                   </Cell>
               </Grid>
           </div>
        )
    }
}
export default Reporte_twitter;