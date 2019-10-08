import React from 'react';
import classes from './Proyect.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

import Fade from 'react-reveal/Fade';

const Proyect = (props) => (
    <Fade duration={1500} bottom>
    <div className={classes.Proyect}>
        <div className={classes.Card}>
            <div className={[classes.Face,classes.Face1].join(" ")}>
                <div className={classes.Content}>
                    <img src={props.image} alt="Test"/>
                    <h3>{props.title}</h3>
                </div>
            </div>
            <div className={[classes.Face,classes.Face2].join(" ")}>
                <div className={classes.Content}>
                    <p>{props.description}</p>
                    <div className={classes.Icons}>
                        <a href={props.githubLink} target="_blank">
                            <FontAwesomeIcon 
                                title="View Code" 
                                className={classes.Icon} 
                                icon={faGithubSquare} />
                            </a>
                        <a href={props.demoLink} target="_blank">
                            <FontAwesomeIcon 
                                title="View Demo" 
                                className={classes.Icon} 
                                icon={faLaptopCode} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Fade>
);

export default Proyect;