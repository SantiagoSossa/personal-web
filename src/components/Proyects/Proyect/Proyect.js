import React, { Component } from 'react';
import classes from './Proyect.module.css';
import Modal from '../../Modal/Modal'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

import Fade from 'react-reveal/Fade';

export default class Proyect extends Component {
    state = {
        moreInfo: false,
    }

    handleModalOpen = () => {
        console.log("opem");
        this.setState({moreInfo: true});
    }

    handleModalClose = () => {
        this.setState({moreInfo: false});
    }

    render() {
        const style = {
            color: this.props.color.text,
            background: this.props.color.bg1
        }
        const iconStyles = {
            filter:`drop-shadow(3px 6px 6px ${this.props.color.bg2})`
        }
        let modal = null;
        if(this.state.moreInfo){
            modal = <Modal 
                show={this.state.moreInfo}
                modalClosed={this.handleModalClose}
                colors={this.props.color}
                gif={this.props.gif}
                icons={this.props.icons}
                largeDescription={this.props.largeDescription}>
            </Modal>;
        }
        return(
            <div className={classes.Proyect}>
                <Fade duration={1500} bottom>
                <div className={classes.Card}>
                    <div className={[classes.Face,classes.Face1].join(" ")} style={style}>
                        <div className={classes.Content}>
                            <img src={this.props.image} alt="Test"/>
                        </div>
                    </div>
                    <div className={[classes.Face,classes.Face2].join(" ")} style={style}>
                        <div className={classes.Content}>
                            <p>{this.props.description}</p>
                            <div className={classes.Icons}>
                                <a href={this.props.githubLink} rel="noopener noreferrer" target="_blank" style={style}>
                                    <FontAwesomeIcon 
                                        title="View Code" 
                                        className={classes.Icon} 
                                        icon={faGithubSquare} 
                                        style={iconStyles}/>
                                    </a>
                                <a href={this.props.demoLink} rel="noopener noreferrer" target="_blank" style={style}>
                                    <FontAwesomeIcon 
                                        title="View Demo" 
                                        className={classes.Icon} 
                                        icon={faLaptopCode} 
                                        style={iconStyles}/>
                                </a>
                                <FontAwesomeIcon 
                                    onClick={this.handleModalOpen}
                                    title="More Info" 
                                    className={classes.Icon} 
                                    icon={faInfoCircle} 
                                    style={iconStyles}/>
                            </div>
                        </div>
                    </div>
                </div>
                </Fade>
                {modal}
            </div>
        )
    }
}
