import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';
import ReactGA from 'react-ga';

function initizeAnalytics(){
    ReactGA.initialize("UA-159941225-1")
    ReactGA.pageview('/cv')
}


function App() {
    initizeAnalytics()
  return (
<div className="demo-big-content">
    <Layout>
        <Header className='header-color' title={<Link style={{textDecoration:'none',color:'white'}}to='/'>Gonzalo Gálvez Bobadilla</Link>} scroll>
            <Navigation>
                <Link to="/landingpage">Inicio</Link>
                <Link to="/aboutme">Sobre Mi</Link>
                <Link to="/projects">Proyectos</Link>
                <Link to="/contact">Contacto</Link>
            </Navigation>
        </Header>
        <Drawer title="Menu">
            <Navigation>
                <Link to="/landingpage">Inicio</Link>
                <Link to="/aboutme">Sobre Mi</Link>
                <Link to="/projects">Proyectos</Link>
                <Link to="/contact">Contacto</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
