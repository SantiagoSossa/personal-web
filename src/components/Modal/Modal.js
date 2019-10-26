import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngular,
    faCss3Alt,
    faHtml5,
    faReact,
    faJs,
    faJava,
    faBootstrap
  } from '@fortawesome/free-brands-svg-icons';

export default function Modal(props) {
    //const background = props.colors.bg1;
    const style = {
        color: props.colors.text,
        background: props.colors.bg1
    }
    let tecIcons = null;
    tecIcons = props.icons.map(icon => {
        return <FontAwesomeIcon icon={icon} className={classes.Icon} />
    })
    return(
        <div>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div 
                className={classes.Modal}
                // style={{backgroundColor:background}}>
                style={style}>
                <div className={classes.Container}>
                    <div className={classes.Left}>
                        <div className={classes.ImageContainer} style={{boxShadow:`3px 6px 6px ${props.colors.shadow}`}}>
                            <img src={props.gif} alt="Demo Gif"/>
                        </div>
                    </div>
                    <div className={classes.Right}>
                        {props.largeDescription}
                        <div className={classes.Technologies}>
                            <p>Technologies Used</p>
                            <br/>
                            <div className={classes.Icons}>{tecIcons}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}