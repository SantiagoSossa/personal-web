import React, {Component} from 'react';
import Proyect from './Proyect/Proyect';
import classes from './Proyects.module.css';
import CollegeRecipes from '../../assets/images/CollegeRecipes.png';
import CollegeRecipesgif from '../../assets/gifs/CollegeRecipes.gif';
import Conexion from '../../assets/images/Conexion.png';
import Conexiongif from '../../assets/gifs/Conexion.gif';
import Portfolio from '../../assets/images/Portfolio.png';
import Portfoliogif from '../../assets/gifs/Portfolio.gif';
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
                        description="Search for recipes ingredient by ingredient and save the ones you liked."
                        largeDescription={<p>This project was made with Angular and it works by connecting to a recipes API and getting a bunch of different recipes depending on the ingredients that the user adds to the search.<br/><br/>
                        You can save your favorite recipes by authenticating with your google account and clicking the like button, this it’s managed with Firebase.</p>}
                        githubLink="https://github.com/SantiagoSossa/college-recipes" 
                        demoLink="https://college-recipes.firebaseapp.com/"
                        show={this.handleModalOpen}
                        color={this.props.colors}
                        gif={CollegeRecipesgif}
                        icons={[faAngular,faCss3Alt,faHtml5,faJs,faBootstrap,faFireAlt]}/>
                    <Proyect 
                        image={Conexion}
                        title="Conexion EyS" 
                        description="Landing page of a logistics and events company from Manizales Colombia." 
                        largeDescription={<p>Conexion Eventos y Servicios approached me with the idea of reworking their business web page so I used Angular as a framework to build a single page application with all the information about the company.<br/><br/>
                        I was in charge of everything in the development process, from the design to the code.</p>}
                        githubLink="https://github.com/SantiagoSossa/conexion-webpage" 
                        demoLink="http://conexioneventosyservicios.com/"
                        show={this.handleModalOpen}
                        color={this.props.colors}
                        gif={Conexiongif}
                        icons={[faAngular,faCss3Alt,faHtml5,faJs,faBootstrap]}/>
                    <Proyect 
                        image={Portfolio}    
                        title="This Portfolio" 
                        description="This personal portfolio (the demo link takes you nowhere, you're here)."
                        largeDescription={<p>For this project I wanted to try something new so used React to build my personal web page, I also worked with vanilla CSS to handle my styles.<br/><br/>
                        Here I showcase my recent work and a short summary about who I am. Feel free to contact me if you’re liking what you see.</p>}
                        githubLink="https://github.com/SantiagoSossa/personal-web" 
                        show={this.handleModalOpen}
                        color={this.props.colors}
                        gif={Portfoliogif}
                        icons={[faReact,faCss3Alt,faHtml5,faJs]}/>
                    <Proyect 
                        image={Gamesphere}    
                        title="Gamesphere" 
                        description="Video games page where you can find a couple of classic ones to play."
                        largeDescription={<p>The goal of this project was to replicate a couple of classic games using mostly Javascript and React, to showcase them in this landing page.<br/><br/>
                        I made Gamesphere together with another fellow developer, each of us equally in charge  of both the UI/UX design and the coding.</p>}
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