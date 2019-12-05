import React, {Component} from 'react';
import Project from './Project/Project';
import classes from './Projects.module.css';
import CollegeRecipes from '../../assets/images/CollegeRecipes-logo.png';
import CollegeRecipesgif from '../../assets/gifs/CollegeRecipes.gif';
import Conexion from '../../assets/images/Conexion-logo.png';
import Conexiongif from '../../assets/gifs/Conexion.gif';
import Beermeapp from '../../assets/images/Beermeapp-logo.png';
import BeerMeAppgif from '../../assets/gifs/Beermeapp.gif';
import Gamesphere from '../../assets/images/Gamesphere-logo.png';
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

class Projects extends Component {
    render() {
        const style = {
            color: this.props.colors.text,
            background: this.props.colors.bg3
        }
        return(
            <div id="projects" className={classes.Projects} style={style}>
                <h3>Projects</h3>
                <span className={classes.TitleBorder}></span>
                <div className={classes.ProjectsList}>
                    <Project 
                        image={Conexion}
                        description="Landing page of a logistics and events company from Manizales Colombia." 
                        largeDescription={<p>Conexion Eventos y Servicios approached me with the idea of reworking their business webpage, so I used Angular as a framework to build a single page application with all the information about the company.<br/><br/>
                        I was in charge of the whole development process, from the design to the code.</p>}
                        githubLink="https://github.com/SantiagoSossa/conexion-webpage" 
                        demoLink="http://conexioneventosyservicios.com/"
                        show={this.handleModalOpen}
                        color={this.props.colors}
                        gif={Conexiongif}
                        icons={[faAngular,faCss3Alt,faHtml5,faJs,faBootstrap]}/>
                    <Project 
                        image={Gamesphere}   
                        description="Video games page where you can find a couple of classic ones to play."
                        largeDescription={<p>The goal of this project was to replicate a couple of classic games using mostly Javascript and React, to showcase them in this landing page.<br/><br/>
                        I made Gamesphere together with another fellow developer, each of us equally in charge  of both the UI/UX design and the coding.</p>}
                        githubLink="https://github.com/Bluup/landing-games" 
                        demoLink="https://keen-swirles-c4e894.netlify.com/"
                        show={this.handleModalOpen}
                        color={this.props.colors}
                        gif={Gamespheregif}
                        icons={[faReact,faSass,faCss3Alt,faHtml5,faJs]}/>
                    <Project 
                        image={Beermeapp}    
                        description="Save the info of your favorite beers, share them across the world."
                        largeDescription={<p>For this project I mainly wanted to create a web app to save the information of all the beers that I was drinking over time.<br/><br/>
                        Then some other ideas were coming out and I decided to scale the application for public use by adding accounts, leaderboards and some other functionalities.</p>}
                        githubLink="https://github.com/SantiagoSossa/beer-app" 
                        demoLink="https://keen-swirles-c4e894.netlify.com/"
                        show={this.handleModalOpen}
                        color={this.props.colors}
                        gif={BeerMeAppgif}
                        icons={[faReact,faCss3Alt,faHtml5,faJs]}/>
                    <Project 
                        image={CollegeRecipes}
                        description="Search for recipes ingredient by ingredient, and save the ones you liked."
                        largeDescription={<p>This project was made with Angular. It works by connecting to a recipes API and getting a bunch of different recipes filtered by the ingredients that the user adds to the search.<br/><br/>
                        You can save your favorite recipes by authenticating with your Google account and clicking the like button, this part is managed with Firebase.</p>}
                        githubLink="https://github.com/SantiagoSossa/college-recipes" 
                        demoLink="https://college-recipes.firebaseapp.com/"
                        show={this.handleModalOpen}
                        color={this.props.colors}
                        gif={CollegeRecipesgif}
                        icons={[faAngular,faCss3Alt,faHtml5,faJs,faBootstrap,faFireAlt]}/>
                </div>
            </div>
        )
    }
};

export default Projects;