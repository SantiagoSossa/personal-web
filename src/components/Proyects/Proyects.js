import React, {Component} from 'react';
import Proyect from './Proyect/Proyect';
import classes from './Proyects.module.css';
import CollegeRecipes from '../../assets/images/CollegeRecipes.png';
import Conexion from '../../assets/images/Conexion.png';
import Portfolio from '../../assets/images/Portfolio.png';
import Gamesphere from '../../assets/images/Gamesphere.png';
import Gamespheregif from '../../assets/gifs/Gamesphere.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngular,
    faCss3Alt,
    faHtml5,
    faReact,
    faJs,
    faBootstrap,
    faSass
  } from '@fortawesome/free-brands-svg-icons';
import { faFireAlt } from '@fortawesome/free-solid-svg-icons'

class Proyects extends Component {
    render() {
        const style = {
            color: this.props.colors.text,
            background: this.props.colors.bg3
        }
        return(
            <div id="proyects" className={classes.Proyects} style={style}>
                <h3>Proyects</h3>
                <span className={classes.TitleBorder}></span>
                <div className={classes.ProyectsList}>
                    <Proyect 
                        image={CollegeRecipes}
                        title="College Recipes" 
                        description="Search for recipes ingredient by ingredient and save them if you like"
                        githubLink="https://github.com/SantiagoSossa/college-recipes" 
                        demoLink="https://college-recipes.firebaseapp.com/"
                        show={this.handleModalOpen}
                        color={this.props.colors}
                        gif={Gamespheregif}
                        icons={[faAngular,faCss3Alt,faHtml5,faJs,faBootstrap,faFireAlt]}/>
                    <Proyect 
                        image={Conexion}
                        title="Conexion EyS" 
                        description="Landing page of a logistics and events company from Manizales Colombia" 
                        githubLink="https://github.com/SantiagoSossa/conexion-webpage" 
                        demoLink="http://conexioneventosyservicios.com/"
                        show={this.handleModalOpen}
                        color={this.props.colors}
                        gif={Gamespheregif}
                        icons={[faAngular,faCss3Alt,faHtml5,faJs,faBootstrap]}/>
                    <Proyect 
                        image={Portfolio}    
                        title="This Portfolio" 
                        description="This personal portfolio (the demo link takes you nowhere, you're here)" 
                        githubLink="https://github.com/SantiagoSossa/personal-web" 
                        show={this.handleModalOpen}
                        color={this.props.colors}
                        gif={Gamespheregif}
                        icons={[faReact,faCss3Alt,faHtml5,faJs]}/>
                    <Proyect 
                        image={Gamesphere}    
                        title="Gamesphere" 
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni minus consectetur nihil eveniet delectus obcaecati unde quidem animi!" 
                        githubLink="https://github.com/Bluup/landing-games" 
                        demoLink="https://keen-swirles-c4e894.netlify.com/"
                        color={this.props.colors}
                        gif={Gamespheregif}
                        icons={[faReact,faSass,faCss3Alt,faHtml5,faJs]}/>
                </div>
            </div>
        )
    }
};

export default Proyects;