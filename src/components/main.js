import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Landingpage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Dashboard from './dashboards';
import Reporte_twitter from './dashboards/reporte_twitter';


const Main = () => (
    <Switch>
        <Route exact path="/" component={Landingpage}/>
        <Route path="/cv" component={Landingpage}/>
        <Route path="/landingpage" component={Landingpage}/>
        <Route path="/aboutme" component={AboutMe}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/projects" component={Projects}/>
        <Route path='/dashboards' component={Dashboard}/>
        <Route path='/reporte_twitter' component={Reporte_twitter}/>

    </Switch>
)

export default Main;