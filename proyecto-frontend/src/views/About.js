import '../App.css';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import image from '../images/code.jpg';
import Card from '@material-ui/core/Card';
import Photo from '../images/LuisGranados.jpg';
import logo from '../logo.svg';
<img src={logo} className="App-logo img" alt="logo" />

const styles  = makeStyles((theme) => ({
    large: { width: theme.spacing(7), height: theme.spacing(7) },
    wrapper: { maxWidth: 500, marginLeft: 20, textAlign: 'center' },
    avatar: { marginLeft: 200 }
  }));

function About(props) {
    return (
        <Card style={{ maxWidth: 800, margin: 15 }}>
            <div className="App">
                <div className="logo">
                    <img src={logo} className="App-logo img" alt="logo..." />
                    <img src={image} width="300px" alt="about..."/>
                </div>
                <div style={styles.wrapper}>
                    <div className="title">Proyecto React</div>
                    <div className="img-about">
                        <Avatar src={Photo} className={styles.large}  alt="Luis Granados..." />
                    </div>
                </div>
                <div className="detail">
                <p>
                    Este proyecto consta de dos partes: un proyecto-frontend que implementa Material de cara al cliente y un proyecto-backend que realiza la conexi&oacute;n a base de datos.
                    <ol>
                        <li>Para el proyecto-backend se trabaj&oacute; con los siguientes paquetes:
                            <ul><li>Paquetes para consumir MySql: 
                                <ul>
                                    <li>npm install mysql</li>
                                    <li>npm install mysql-async-simple (para manejo asincronico de las consultas a base de datos)</li>
                                </ul>
                            </li></ul>
                            <ul><li>Paquete para manejar inyecci&oacute;n de cadenas (tipo stringFormat):
                                <ul>
                                    <li>npm install stringinject</li>ejm: var  string  = stringInject ("Esta es una {0} cadena para {1}", [" prueba" , "stringInject" ] ) ;
                                </ul>
                            </li></ul>
                            <ul><li>Paquete para manejar API REST con json:
                                <ul><li>npm i express</li></ul>
                            </li></ul>
                            <ul><li>Paquete para cuando el navegador indica problemas de cors (como que si las apps estuviesen en ambientes diferentes):
                                <ul><li>npm install cors</li></ul>
                            </li></ul>
                        </li>
                        <li>Para el proyecto-front se trabaj&oacute; con los siguientes paquetes:
                            <ul><li>Paquete para diseñar con Material:
                                <ul><li>npm install @material-ui/core</li></ul>
                            </li></ul>
                            <ul><li>Paquete para el manejo de formato telef&oacute;nico:
                                <ul><li>npm install react-phone-input-2 --save</li></ul>
                            </li></ul>
                            <ul><li>Paquete para enrutamiento Web:
                                <ul><li>npm i --save react-router-dom</li></ul>
                            </li></ul>
                            <ul><li>Paquete para consumir el Api:
                                <ul><li>npm install axios</li></ul>
                            </li></ul>
                        </li>
                    </ol>
                </p>
                </div>
            </div>
        </Card>
    );
}

export default About;