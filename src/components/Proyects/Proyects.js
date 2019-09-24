import React from 'react';
import Proyect from './Proyect/Proyect';
import classes from './Proyects.module.css';

const Proyects = (props) => (
    <div className={classes.Proyects}>
        <h3>Proyects</h3>
        <span className={classes.TitleBorder}></span>
        <div className={classes.ProyectsList}>
            <Proyect/>
            <Proyect/>
            <Proyect/>
        </div>
    </div>
);

export default Proyects;