import React, {Component} from 'react';
import Proyect from './Proyect/Proyect';
import classes from './Proyects.module.css';

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
                        title="Proyect 1" 
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni minus consectetur nihil eveniet delectus obcaecati unde quidem animi!" 
                        githubLink="" 
                        demoLink=""/>
                    <Proyect 
                        title="Proyect 2" 
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni minus consectetur nihil eveniet delectus obcaecati unde quidem animi!" 
                        githubLink="" 
                        demoLink=""/>
                    <Proyect 
                        title="Proyect 3" 
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni minus consectetur nihil eveniet delectus obcaecati unde quidem animi!" 
                        githubLink="" 
                        demoLink=""/>
                </div>
            </div>
        )
    }
};

export default Proyects;