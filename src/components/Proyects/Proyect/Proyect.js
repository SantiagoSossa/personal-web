import React, { Component } from 'react';
import classes from './Proyect.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

import Fade from 'react-reveal/Fade';

export default class Proyect extends Component {
    render() {
        return(
            <Fade duration={1500} bottom>
                <div className={classes.Proyect}>
                    <div className={classes.Card}>
                        <div className={[classes.Face,classes.Face1].join(" ")}>
                            <div className={classes.Content}>
                                <img src={this.props.image} alt="Test"/>
                                <h3>{this.props.title}</h3>
                            </div>
                        </div>
                        <div className={[classes.Face,classes.Face2].join(" ")}>
                            <div className={classes.Content}>
                                <p>{this.props.description}</p>
                                <div className={classes.Icons}>
                                    <a href={this.props.githubLink} target="_blank">
                                        <FontAwesomeIcon 
                                            title="View Code" 
                                            className={classes.Icon} 
                                            icon={faGithubSquare} />
                                        </a>
                                    <a href={this.props.demoLink} target="_blank">
                                        <FontAwesomeIcon 
                                            title="View Demo" 
                                            className={classes.Icon} 
                                            icon={faLaptopCode} />
                                    </a>
                                    <FontAwesomeIcon 
                                        onClick={this.props.show}
                                        title="More Info" 
                                        className={classes.Icon} 
                                        icon={faInfoCircle} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        )
    }
}
