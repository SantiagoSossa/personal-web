import React from 'react';
import classes from './Proyect.module.css';
import proyectTest from '../../../assets/images/ProyectTest.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

const Proyect = (props) => (
    <div className={classes.Proyect}>
        <div className={classes.Card}>
            <div className={[classes.Face,classes.Face1].join(" ")}>
                <div className={classes.Content}>
                    <img src={proyectTest} alt="Test"/>
                    <h3>{props.title}</h3>
                </div>
            </div>
            <div className={[classes.Face,classes.Face2].join(" ")}>
                <div className={classes.Content}>
                    <p>{props.description}</p>
                    <div className={classes.Icons}>
                        <a href={props.githubLink} target="_blank">
                            <FontAwesomeIcon 
                                title="Github" 
                                className={classes.Icon} 
                                icon={faGithubSquare} 
                                size="2x"/>
                            </a>
                        <a href={props.demoLink} target="_blank">
                            <FontAwesomeIcon 
                                title="Proyect" 
                                className={classes.Icon} 
                                icon={faLaptopCode} 
                                size="2x" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Proyect;