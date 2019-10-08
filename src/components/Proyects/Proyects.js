import React, {Component} from 'react';
import Proyect from './Proyect/Proyect';
import classes from './Proyects.module.css';
import CollegeRecipes from '../../assets/images/CollegeRecipes.png';
import Conexion from '../../assets/images/Conexion.png';
import Portfolio from '../../assets/images/Portfolio.png';

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
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni minus consectetur nihil eveniet delectus obcaecati unde quidem animi!" 
                        githubLink="https://github.com/SantiagoSossa/college-recipes" 
                        demoLink="https://college-recipes.firebaseapp.com/"/>
                    <Proyect 
                        image={Conexion}
                        title="Conexion EyS" 
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni minus consectetur nihil eveniet delectus obcaecati unde quidem animi!" 
                        githubLink="https://github.com/SantiagoSossa/conexion-webpage" 
                        demoLink="http://conexioneventosyservicios.com/"/>
                    <Proyect 
                        image={Portfolio}    
                        title="This Portfolio" 
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni minus consectetur nihil eveniet delectus obcaecati unde quidem animi!" 
                        githubLink="https://github.com/SantiagoSossa/personal-web" 
                        demoLink="https://www.santiagosossa.com/"/>
                </div>
            </div>
        )
    }
};

export default Proyects;