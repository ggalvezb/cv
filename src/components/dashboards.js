import React, { Componen, Component } from "react";
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  IconButton,
  CardMenu,
} from "react-mdl";
import { Link } from "react-router-dom";
import Dashboard_class from './tarjeta_dashboards';

class Dashboard extends Component {
  render() {
    return (
      <div>

        <Dashboard_class
        titulo='Control Programa Solidario Elección de Vivienda (DS 49)'
        image_card='https://www.agci.cl/images/Sala_de_prensa/2015_octubre/viviendasocial.jpg'
        descripcion='Este dashboard muestra un el control Fisico y Financiero del Programa DS 49.'
        link='https://app.powerbi.com/view?r=eyJrIjoiNDJkY2I2NDYtNjIyYS00ZTg5LTgyZmYtYzgzZDljZDAwNzAwIiwidCI6IjdjZjBmMGRjLTZjNzctNDBhZi1hZmNlLWQwZWY2ZjU2YzJlYiJ9'
        nombre_boton='VER DASHBOARD'
        />

        <Dashboard_class
        titulo='Control Programa Protección al Patrimonio Familiar (DS 255)'
        image_card='https://www.ciperchile.cl/wp-content/uploads/XPJSBKO67FC2DKGLH3QPDSESCI-e1605190909206.jpg'
        descripcion='Este dashboard muestra un el control Fisico y Financiero del Programa DS 255.'
        link='https://app.powerbi.com/view?r=eyJrIjoiNjY1ZDZmNzktZWNhNi00OTg3LWIzYmMtMmIzYmM2OTMzZmQ0IiwidCI6IjdjZjBmMGRjLTZjNzctNDBhZi1hZmNlLWQwZWY2ZjU2YzJlYiJ9'
        nombre_boton='VER DASHBOARD FISICO'
        link_2='https://app.powerbi.com/view?r=eyJrIjoiOTc4NDZiZTYtN2FlYS00ZjAwLWIyZTItMDNiMDFkZWU5MTIxIiwidCI6IjljYWNkMjEwLTcwYTktNDRlZS04MjZiLWY2Yjc2ODVhMDFkNiIsImMiOjR9'
        nombre_boton_2='VER DASHBOARD FINANCIERO'
        />

        <Dashboard_class
        titulo='Streaming Twitter'
        image_card='https://cdn.pixabay.com/photo/2018/04/14/18/06/twitter-3319619_1280.jpg'
        descripcion='Este dashboard muestra un proyecto de straming de datos de twitter, ejecutado con Python, MongoDB y PowerBI.'
        link='https://ggalvezb.github.io/streaming_twitter/'
        nombre_boton='VER PAGINA'
        />

        <Dashboard_class
        titulo='Reporte Nacional de Campamentos'
        image_card='https://www.minvu.cl/wp-content/uploads/2019/08/mapachile-campamentos.svg'
        descripcion='Este dashboard muestra los resultados del catastro nacional de campamentos 2019 realizado por el MINVU'
        link='https://ggalvezb.github.io/Dashboard_campamentos/'
        nombre_boton='VER PAGINA'
        />

        <Dashboard_class
        titulo='Reporte de Acceso a servicios en Proyectos Habitacionales Sociales'
        image_card='https://cdn.pixabay.com/photo/2015/09/05/19/43/apartments-924786_1280.jpg'
        descripcion='Este dashboard muestra la conectividad de los diferentes proyectos habitacionales sociales que hay en Chile,
        calculando métricas de distancia a Bomberos, Escuelas, Carabineros, etc.'
        link='https://ggalvezb.github.io/reporte_proyectos_sociales/'
        nombre_boton='VER PAGINA'
        />

      </div>
    );
  }
}
export default Dashboard;
